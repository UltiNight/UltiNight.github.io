/* Mini converters (a browser-side version of the Hypercalculia bot's tools). */
function initLab(t) {
  const MAX_INPUT = 512;
  const $ = (id) => document.getElementById(id);

  const row = (label, value) => {
    const div = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    div.append(dt, dd);
    return div;
  };
  const show = (dl, rows) => dl.replaceChildren(...rows.map(([label, value]) => row(label, value)));
  const fail = (dl) => {
    const div = document.createElement("div");
    div.className = "lab-error";
    div.textContent = t("lab.invalid");
    dl.replaceChildren(div);
  };

  const hexBytes = (bytes) => [...bytes].map((b) => b.toString(16).padStart(2, "0")).join(" ");
  const group = (str, size) => str.replace(new RegExp(`(?=(?:.{${size}})+$)`, "g"), " ").trim();

  /* ---- base conversion ---- */
  function parseBig(text) {
    let s = text.trim().replace(/_/g, "");
    if (!s) return null;
    let neg = false;
    if (s[0] === "-") { neg = true; s = s.slice(1); }
    else if (s[0] === "+") s = s.slice(1);
    if (!/^(0x[0-9a-f]+|0b[01]+|0o[0-7]+|\d+)$/i.test(s)) return undefined;
    const v = BigInt(s);
    return neg ? -v : v;
  }

  function renderNumber() {
    const dl = $("out-number");
    const raw = $("lab-number").value.slice(0, MAX_INPUT);
    const v = parseBig(raw);
    if (v === null) return dl.replaceChildren();
    if (v === undefined) return fail(dl);
    const neg = v < 0n;
    const a = neg ? -v : v;
    const sign = neg ? "-" : "";
    show(dl, [
      ["DEC", `${sign}${a.toString(10)}`],
      ["HEX", `${sign}0x${a.toString(16)}`],
      ["OCT", `${sign}0o${a.toString(8)}`],
      ["BIN", `${sign}${group(a.toString(2).padStart(Math.ceil(a.toString(2).length / 4) * 4, "0"), 4)}`],
    ]);
  }

  /* ---- IEEE754 ---- */
  const f32 = (n) => {
    const dv = new DataView(new ArrayBuffer(4));
    dv.setFloat32(0, n, true);
    return new Uint8Array(dv.buffer);
  };
  const f64 = (n) => {
    const dv = new DataView(new ArrayBuffer(8));
    dv.setFloat64(0, n, true);
    return new Uint8Array(dv.buffer);
  };
  const bitsOf = (bytes) => bytes.slice().reverse().reduce((acc, b) => (acc << 8n) | BigInt(b), 0n);
  const fields = (bytes) => {
    const wide = bytes.length === 8;
    const bits = bitsOf(bytes);
    const total = wide ? 64n : 32n;
    const expBits = wide ? 11n : 8n;
    const manBits = total - 1n - expBits;
    const sign = bits >> (total - 1n);
    const exp = (bits >> manBits) & ((1n << expBits) - 1n);
    const man = bits & ((1n << manBits) - 1n);
    return `sign ${sign} / exp ${exp} (0x${exp.toString(16)}) / mantissa 0x${man.toString(16)}`;
  };
  const fromBytes = (bytes) => {
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.length);
    return bytes.length === 8 ? dv.getFloat64(0, true) : dv.getFloat32(0, true);
  };

  function parseByteList(text) {
    const parts = text.trim().split(/[\s,]+/).filter(Boolean).map((p) => p.replace(/^0x/i, ""));
    if (parts.length !== 4 && parts.length !== 8) return null;
    if (!parts.every((p) => /^[0-9a-f]{2}$/i.test(p))) return null;
    return Uint8Array.from(parts.map((p) => parseInt(p, 16)));
  }

  function renderFloat() {
    const dl = $("out-float");
    const raw = $("lab-float").value.slice(0, MAX_INPUT).trim();
    if (!raw) return dl.replaceChildren();

    const bytes = parseByteList(raw);
    if (bytes) {
      const kind = bytes.length === 8 ? "float64" : "float32";
      return show(dl, [
        [t("lab.bytes"), hexBytes(bytes)],
        [kind, String(fromBytes(bytes))],
        ["bits", `0x${bitsOf(bytes).toString(16).padStart(bytes.length * 2, "0")}`],
        ["fields", fields(bytes)],
      ]);
    }

    const n = /^nan$/i.test(raw) ? NaN : Number(raw);
    if (Number.isNaN(n) && !/^nan$/i.test(raw)) return fail(dl);
    const a = f32(n);
    const b = f64(n);
    show(dl, [
      ["f32 bytes", hexBytes(a)],
      ["f32 bits", `0x${bitsOf(a).toString(16).padStart(8, "0")}`],
      ["f32 fields", fields(a)],
      ["f32 value", String(fromBytes(a))],
      ["f64 bytes", hexBytes(b)],
      ["f64 bits", `0x${bitsOf(b).toString(16).padStart(16, "0")}`],
      ["f64 fields", fields(b)],
    ]);
  }

  /* ---- text / hex / base64 ---- */
  const toBase64 = (bytes) => {
    let bin = "";
    bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return btoa(bin);
  };

  function readBytes(mode, raw) {
    if (mode === "text") return new TextEncoder().encode(raw);
    if (mode === "hex") {
      const clean = raw.replace(/0x/gi, "").replace(/[\s,]+/g, "");
      if (!clean || clean.length % 2 || !/^[0-9a-f]+$/i.test(clean)) return undefined;
      return Uint8Array.from(clean.match(/../g).map((h) => parseInt(h, 16)));
    }
    try {
      const norm = raw.trim().replace(/-/g, "+").replace(/_/g, "/");
      const bin = atob(norm);
      return Uint8Array.from(bin, (c) => c.charCodeAt(0));
    } catch {
      return undefined;
    }
  }

  function renderText() {
    const dl = $("out-text");
    const raw = $("lab-text").value.slice(0, MAX_INPUT);
    if (!raw) return dl.replaceChildren();
    const bytes = readBytes($("lab-text-from").value, raw);
    if (!bytes) return fail(dl);
    let text;
    try { text = new TextDecoder("utf-8", { fatal: true }).decode(bytes); }
    catch { text = "(not valid UTF-8)"; }
    show(dl, [
      ["Text", text],
      ["Hex", hexBytes(bytes)],
      ["Base64", toBase64(bytes)],
      [t("lab.bytes"), String(bytes.length)],
    ]);
  }

  /* ---- wiring ---- */
  const refreshers = { number: renderNumber, float: renderFloat, text: renderText };
  const refresh = () => Object.values(refreshers).forEach((fn) => fn());

  $("lab-number").addEventListener("input", renderNumber);
  $("lab-float").addEventListener("input", renderFloat);
  $("lab-text").addEventListener("input", renderText);
  $("lab-text-from").addEventListener("change", renderText);

  document.querySelectorAll("#lab .lab-tabs button").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("#lab .lab-tabs button").forEach((b) =>
        b.setAttribute("aria-selected", String(b === tab))
      );
      document.querySelectorAll("#lab .lab-panel").forEach((panel) => {
        panel.hidden = panel.dataset.panel !== tab.dataset.tab;
      });
    });
  });

  refresh();
  return refresh;
}
