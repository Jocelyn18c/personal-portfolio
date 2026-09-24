// Mobile nav toggle
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// Highlight the current page in the nav
const page = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === page) link.classList.add("active");
});

// Fade-in-on-scroll, Apple style
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const CONTACT_EMAIL = "jocelynheredia018@gmail.com";
const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject") || "Hello from your portfolio");
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Rotating titles under the name. Edit the list to change what cycles.
const ROLES = [
  "Computer Engineer.",
  "HCI Designer.",
  "Coffee enthusiast.",
  "Chicago creative.",
  "Circuit tinkerer.",
];
const rotatorWord = document.querySelector(".rotator-word");
if (rotatorWord && !reduceMotion) {
  let i = 0;
  setInterval(() => {
    rotatorWord.classList.add("out");
    setTimeout(() => {
      i = (i + 1) % ROLES.length;
      rotatorWord.textContent = ROLES[i];
      rotatorWord.classList.remove("out");
      rotatorWord.classList.add("in");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => rotatorWord.classList.remove("in"))
      );
    }, 450);
  }, 2600);
}

// Polaroids drift toward the mouse and move at different speeds on scroll
const polaroids = document.querySelectorAll(".polaroid[data-depth]");
if (polaroids.length && !reduceMotion) {
  window.addEventListener("pointermove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    polaroids.forEach((p) => {
      const d = parseFloat(p.dataset.depth);
      p.style.setProperty("--mx", `${x * 30 * d}px`);
      p.style.setProperty("--my", `${y * 30 * d}px`);
    });
  });
  window.addEventListener(
    "scroll",
    () => {
      polaroids.forEach((p) => {
        p.style.setProperty("--sy", `${window.scrollY * -0.25 * parseFloat(p.dataset.depth)}px`);
      });
    },
    { passive: true }
  );
}

// Drifting background: coffee beans, Chicago stars, gears, sparkles and suns
// float up the whole screen. Add data-drift to <body> on any page to turn it on.
const DRIFT_SHAPES = {
  bean: (c) => `<svg viewBox="0 0 24 32"><ellipse cx="12" cy="16" rx="10" ry="14" fill="${c}"/><path d="M12 3c-4 6 4 12 0 26" stroke="#fbf6ef" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  star: (c) => `<svg viewBox="0 0 24 24"><path d="M12 1l2.6 6.5L21.5 6l-4 5.9L24 12l-6.5 1.1 4 5.9-6.9-1.5L12 23l-2.6-5.5L2.5 19l4-5.9L0 12l6.5-1.1-4-5.9 6.9 1.5z" fill="${c}"/></svg>`,
  gear: (c) => `<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.6 5l2-1.5-2-3.5-2.4.8a7.6 7.6 0 00-1.7-1L16 5.8h-4l-.5 2.5a7.6 7.6 0 00-1.7 1L7.4 8.5l-2 3.5 2 1.5a7.3 7.3 0 000 2l-2 1.5 2 3.5 2.4-.8c.5.4 1.1.8 1.7 1l.5 2.5h4l.5-2.5c.6-.2 1.2-.6 1.7-1l2.4.8 2-3.5-2-1.5a7.3 7.3 0 000-2z" fill="none" stroke="${c}" stroke-width="1.6" transform="translate(-2 -2.3) scale(1.1)"/></svg>`,
  sparkle: (c) => `<svg viewBox="0 0 24 24"><path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12z" fill="${c}"/></svg>`,
  sun: (c) => `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="${c}"/><g stroke="${c}" stroke-width="2" stroke-linecap="round"><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></g></svg>`,
  cup: (c) => `<svg viewBox="0 0 28 24"><path d="M3 9h17v6a7 7 0 01-7 7h-3a7 7 0 01-7-7z" fill="${c}"/><path d="M20 11h2a3 3 0 010 6h-2" stroke="${c}" stroke-width="2" fill="none"/><path d="M8 2c-1 2 1 3 0 5M13 1c-1 2 1 3 0 5" stroke="${c}" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`,
};
const DRIFT_MIX = [
  ["bean", "#6b4a36"], ["bean", "#c77b3b"], ["bean", "#6b4a36"],
  ["star", "#d8627a"], ["star", "#4f83b5"],
  ["gear", "#4f83b5"], ["gear", "#6b4a36"],
  ["sparkle", "#f2b04b"], ["sparkle", "#d8627a"],
  ["sun", "#f2b04b"], ["cup", "#c77b3b"], ["cup", "#8fa66a"],
];

if (document.body.hasAttribute("data-drift") && !reduceMotion) {
  const layer = document.createElement("div");
  layer.className = "drift-layer";
  layer.setAttribute("aria-hidden", "true");
  const count = window.innerWidth < 734 ? 14 : 26;
  const rand = (a, b) => a + Math.random() * (b - a);
  for (let n = 0; n < count; n++) {
    const [shape, color] = DRIFT_MIX[n % DRIFT_MIX.length];
    const el = document.createElement("span");
    el.className = "drifter";
    const size = rand(14, 34);
    const duration = rand(22, 46);
    el.style.left = `${rand(0, 100)}%`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${-rand(0, duration)}s`;
    el.style.setProperty("--o", rand(0.25, 0.6).toFixed(2));
    el.style.setProperty("--spin", `${rand(-240, 240)}deg`);
    el.style.setProperty("--sway", `${rand(10, 40)}px`);
    el.innerHTML = DRIFT_SHAPES[shape](color);
    layer.appendChild(el);
  }
  document.body.prepend(layer);
}

// Light / dark mode button. The saved choice is applied early by the
// small script in each page's <head>; this handles clicks and system changes.
const root = document.documentElement;
const themeBtn = document.querySelector(".theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme() {
  const chosen = root.getAttribute("data-theme");
  const dark = chosen ? chosen === "dark" : systemDark.matches;
  root.classList.toggle("dark-on", dark);
  if (themeBtn) {
    themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  return dark;
}

applyTheme();
systemDark.addEventListener("change", applyTheme);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next = root.classList.contains("dark-on") ? "light" : "dark";
    root.classList.add("theme-anim");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    applyTheme();
    setTimeout(() => root.classList.remove("theme-anim"), 450);
  });
}
