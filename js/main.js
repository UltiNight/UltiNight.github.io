(() => {
  const STORAGE_KEY = "portfolio-lang";
  const $ = (sel, root = document) => root.querySelector(sel);
  const root = document.documentElement;

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (value == null) continue;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else node.setAttribute(key, value);
    }
    for (const child of [].concat(children)) {
      if (child != null) node.append(child);
    }
    return node;
  };

  /* ---------- language ---------- */
  const readStoredLang = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  };
  const storeLang = (value) => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* storage may be blocked */ }
  };

  const queryLang = new URLSearchParams(location.search).get("lang");
  let lang = queryLang === "ko" || queryLang === "en" ? queryLang : readStoredLang();
  if (lang !== "ko" && lang !== "en") {
    lang = (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";
  }

  const t = (key) => I18N[lang][key] ?? key;

  /* ---------- motion: reveal on scroll ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motion = !reduceMotion && "IntersectionObserver" in window;
  const REVEAL_SELECTOR =
    ".section-title, .sub-title, .section-desc, .notice, .hint, .mini-title, .card, .tile, .lab, .fact, .links li";

  let revealObserver = null;
  if (motion) {
    root.classList.add("motion");
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
  }

  function setupReveal(scope, immediate) {
    scope.querySelectorAll(REVEAL_SELECTOR).forEach((node) => {
      if (node.classList.contains("reveal")) return;
      node.classList.add("reveal");
      if (!revealObserver || immediate) return node.classList.add("in");
      const index = [...node.parentElement.children].indexOf(node);
      node.style.setProperty("--d", `${Math.min(index, 8) * 60}ms`);
      revealObserver.observe(node);
    });
  }

  /* ---------- projects ---------- */
  function renderMedia(project) {
    const first = project.gallery[0];
    const main = el("img", { src: first.src, alt: `${project.name} screenshot`, loading: "lazy" });
    const buttons = project.gallery.map((view, i) =>
      el("button", { type: "button", class: "view-btn", "aria-pressed": String(i === 0), "data-src": view.src, text: view.label[lang] })
    );
    const bar = el("div", { class: "view-bar", role: "group", "aria-label": "View" }, buttons);
    bar.addEventListener("click", (event) => {
      const btn = event.target.closest(".view-btn");
      if (!btn) return;
      main.src = btn.dataset.src;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    });
    return el("div", { class: "card-media" }, [main, bar]);
  }

  function renderProject(project) {
    const head = el("div", { class: "card-head" }, [
      el("h3", { class: "card-title", text: project.name }),
      project.status ? el("span", { class: "badge", text: project.status[lang] }) : null,
    ]);

    const body = el("div", { class: "card-body" }, [
      head,
      el("p", { class: "card-tagline", text: project.tagline[lang] }),
      el("p", { class: "card-desc", text: project.desc[lang] }),
    ]);

    if (project.meta) {
      body.append(
        el(
          "dl",
          { class: "card-meta" },
          project.meta.map(([labelKey, value]) =>
            el("div", {}, [el("dt", { text: t(labelKey) }), el("dd", { text: value[lang] })])
          )
        )
      );
    }

    if (project.highlights) {
      body.append(
        el("ul", { class: "card-list" }, project.highlights[lang].map((line) => el("li", { text: line })))
      );
    }

    body.append(el("ul", { class: "chips small" }, project.stack.map((tag) => el("li", { text: tag }))));

    if (project.note) body.append(el("p", { class: "card-note", text: project.note[lang] }));

    if (project.play) {
      body.append(
        el("a", {
          class: "card-play",
          href: `${location.protocol === "file:" ? "https://ultinight.github.io/" : ""}${project.play.href}?lang=${lang}`,
          target: "_blank",
          rel: "noopener",
          text: `▶ ${t("label.play")}`,
        })
      );
    }

    body.append(
      project.repo
        ? el("p", { class: "card-repo" }, [
            el("a", { class: "card-link", href: project.repo, target: "_blank", rel: "noopener", text: "GitHub ↗" }),
            project.repoNote ? el("span", { class: "card-private", text: project.repoNote[lang] }) : null,
          ])
        : el("span", { class: "card-private", text: t("label.private") })
    );

    const hasMedia = Boolean(project.gallery || project.image);
    const card = el("article", { class: "card" + (hasMedia ? " has-image" : "") });
    if (project.shot) {
      card.append(
        el("figure", { class: "card-shot" }, [
          el(
            "button",
            {
              class: "shot",
              type: "button",
              "aria-label": `${project.name} — ${t("skins.open")}`,
              "data-src": project.shot.src,
              "data-name": `${project.name}: ${project.shot.caption[lang]}`,
            },
            [el("img", { src: project.shot.src, alt: project.shot.alt[lang], loading: "lazy", width: 1600, height: 900 })]
          ),
          el("figcaption", { text: project.shot.caption[lang] }),
        ])
      );
    }
    if (project.gallery) {
      card.append(renderMedia(project));
    } else if (project.image) {
      card.append(
        el("div", { class: "card-media" }, [
          el("img", { src: project.image, alt: `${project.name} screenshot`, loading: "lazy" }),
        ])
      );
    }
    card.append(body);
    return card;
  }

  function renderProjects() {
    for (const group of ["ta", "re", "auto", "school"]) {
      $(`#list-${group}`).replaceChildren(...PROJECTS.filter((p) => p.group === group).map(renderProject));
    }
  }

  /* ---------- galleries ---------- */
  const tile = (data, alt) =>
    el(
      "button",
      {
        class: "tile wide",
        type: "button",
        "aria-label": `${data.name} — ${t("skins.open")}`,
        "data-src": data.src,
        "data-name": data.name,
      },
      [
        el("img", { src: data.src, alt, loading: "lazy", width: 2000, height: 1050 }),
        el("span", { class: "tile-name", text: data.name }),
      ]
    );

  function renderGallery() {
    $("#gallery-krita").replaceChildren(
      ...WORK.krita.map((item) => tile(item, `${item.name} workspace while painting a skin texture`))
    );
    $("#gallery-poses").replaceChildren(
      ...WORK.poses.map((item) => tile(item, `${item.name} workspace with posed characters`))
    );
  }

  /* ---------- about, facts, marquee ---------- */
  function renderAbout() {
    $("#about-body").replaceChildren(el("p", { text: t("about.p1") }), el("p", { text: t("about.p2") }));
    $("#stack").replaceChildren(...STACK.map((tool) => el("li", { text: tool.name })));
  }

  function renderMarquee() {
    const chips = STACK.map((tool) =>
      el("span", { class: "tool", style: `--c:${tool.color}` }, [
        tool.icon ? el("img", { src: `assets/icons/${tool.icon}.svg`, alt: "", width: 18, height: 18 }) : null,
        el("span", { text: tool.name }),
      ])
    );
    const copy = () => el("div", { class: "marquee-set" }, chips.map((chip) => chip.cloneNode(true)));
    $("#marquee").replaceChildren(copy(), copy());
  }

  function renderFacts() {
    const facts = [
      [PROJECTS.length, t("fact.projects")],
      [PROJECTS.filter((p) => p.group === "re").length, t("fact.re")],
      [PROJECTS.filter((p) => p.group === "school").length, t("fact.school")],
      ["C# · JS · Python", t("fact.langs")],
    ];
    $("#facts").replaceChildren(
      ...facts.map(([value, label]) =>
        el("div", { class: "fact" }, [el("dd", { text: String(value) }), el("dt", { text: label })])
      )
    );
  }

  function applyText() {
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
    ["resume-link", "resume-link-2"].forEach((id) => {
      const link = document.getElementById(id);
      if (link) link.href = `resume-${lang}.pdf`;
    });
    document.title = lang === "ko" ? "Ultinight — 포트폴리오" : "Ultinight — Portfolio";
    const printHead = document.getElementById("print-head");
    if (printHead) printHead.replaceChildren(el("strong", { text: t("site.name") }), ` · github.com/Ultinight`);
  }

  let refreshLab = () => {};

  function render(immediate) {
    applyText();
    renderAbout();
    renderFacts();
    renderProjects();
    renderGallery();
    renderMarquee();
    refreshLab();
    setupReveal(document, immediate);
  }

  $(".lang").addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-lang]");
    if (!btn || btn.dataset.lang === lang) return;
    lang = btn.dataset.lang;
    storeLang(lang);
    render(true);
  });

  /* ---------- lightbox ---------- */
  const lightbox = $("#lightbox");
  document.addEventListener("click", (event) => {
    const target = event.target.closest(".tile, .shot");
    if (target) {
      $("#lb-figs").replaceChildren(
        el("figure", {}, [el("img", { src: target.dataset.src, alt: target.dataset.name })])
      );
      $("#lb-cap").textContent = target.dataset.name;
      lightbox.showModal();
    } else if (event.target === lightbox) {
      lightbox.close();
    }
  });

  /* ---------- pointer spotlight on cards ---------- */
  document.addEventListener("pointermove", (event) => {
    const card = event.target.closest?.(".card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });

  /* ---------- scroll progress + active nav ---------- */
  const progress = $("#progress");
  const navLinks = [...document.querySelectorAll(".nav a")];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const max = root.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      const line = window.innerHeight * 0.35;
      let current = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      navLinks.forEach((a) => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${current}`));
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- go ---------- */
  $("#year").textContent = new Date().getFullYear();
  if (typeof initLab === "function") refreshLab = initLab(t);
  render(false);
  onScroll();
})();
