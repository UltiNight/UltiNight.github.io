/* Soft, slow WebGL background for the hero. Falls back to a CSS gradient. */
(() => {
  const canvas = document.getElementById("hero-gl");
  if (!canvas) return;
  const shell = canvas.parentElement;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fallback = () => shell.classList.add("no-gl");

  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
  if (!gl) return fallback();

  const VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
}
float fbm(vec2 p){
  float v=0.,a=.5;
  for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.02+vec2(3.1,1.7);a*=.5;}
  return v;
}
void main(){
  vec2 uv=gl_FragCoord.xy/u_res;
  vec2 p=(gl_FragCoord.xy-.5*u_res)/min(u_res.x,u_res.y)*1.7;
  float t=u_time*.05;
  vec2 m=(u_mouse-.5)*.5;

  vec2 q=vec2(fbm(p+t+m),fbm(p+vec2(5.2,1.3)-t));
  vec2 r=vec2(fbm(p+3.*q+vec2(1.7,9.2)+t*1.3),fbm(p+3.*q+vec2(8.3,2.8)-t));
  float f=fbm(p+3.*r);

  vec3 cyan=vec3(.62,.86,.95),violet=vec3(.72,.66,.98),pink=vec3(.98,.72,.84),peach=vec3(1.,.86,.72);
  vec3 col=mix(cyan,violet,smoothstep(.2,.7,f));
  col=mix(col,pink,smoothstep(.4,.9,r.x));
  col=mix(col,peach,smoothstep(.55,1.,q.y)*.6);

  /* keep the text side and the bottom edge close to white */
  float mask=smoothstep(.05,1.,uv.x*.85+uv.y*.5-.1);
  mask*=smoothstep(.0,.4,uv.y);
  float ridge=smoothstep(.45,.5,f)*(1.-smoothstep(.5,.56,f));
  vec3 outc=mix(vec3(1.),col,mask*.6);
  outc=mix(outc,vec3(1.),ridge*.35*mask);
  gl_FragColor=vec4(outc,1.);
}`;

  const compile = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
  };
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return fallback();

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return fallback();
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "a");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(prog, "u_res");
  const uTime = gl.getUniformLocation(prog, "u_time");
  const uMouse = gl.getUniformLocation(prog, "u_mouse");

  // Render at a fraction of CSS size: the effect is soft, so this saves a lot of GPU time.
  const SCALE = 0.5;
  let time = 12;
  let last = 0;
  let running = false;
  let raf = 0;
  const mouse = { x: 0.7, y: 0.6, tx: 0.7, ty: 0.6 };

  function resize() {
    const w = Math.max(2, Math.round(shell.clientWidth * SCALE));
    const h = Math.max(2, Math.round(shell.clientHeight * SCALE));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
  }

  function draw() {
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, time);
    gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    time += dt;
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    draw();
    raf = running ? requestAnimationFrame(frame) : 0;
  }

  function start() {
    if (running || reduceMotion.matches) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  resize();
  draw();

  new ResizeObserver(() => { resize(); draw(); }).observe(shell);

  shell.addEventListener("pointermove", (event) => {
    const rect = shell.getBoundingClientRect();
    mouse.tx = (event.clientX - rect.left) / rect.width;
    mouse.ty = 1 - (event.clientY - rect.top) / rect.height;
  });

  let visible = true;
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible && !document.hidden ? start() : stop();
  }).observe(shell);
  document.addEventListener("visibilitychange", () => (document.hidden || !visible ? stop() : start()));
  reduceMotion.addEventListener("change", () => (reduceMotion.matches ? stop() : start()));

  canvas.addEventListener("webglcontextlost", (event) => { event.preventDefault(); stop(); fallback(); });

  start();
})();
