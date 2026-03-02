// Kian Jadbabaei — Portfolio JS

// ─ Footer year
document.getElementById("year")?.appendChild(
  document.createTextNode(String(new Date().getFullYear()))
);

// ─ Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(!!isOpen));
});

navMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!navMenu || !navToggle) return;
  if (!navMenu.classList.contains("open")) return;
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ─ Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// ─ Scroll-reveal
const revealEls = () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });
};

const toReveal = [
  ".exp-item",
  ".edu-item",
  ".skill-group",
  ".contact-link",
  ".stat-row",
  ".currently-inner",
];
toReveal.forEach((sel) => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${i * 80}ms`;
  });
});

document.querySelectorAll(".project-card").forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${i * 80}ms`;
});

window.addEventListener("scroll", revealEls, { passive: true });
revealEls();

// ─ Topbar shadow on scroll
const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    topbar?.classList.add("scrolled");
  } else {
    topbar?.classList.remove("scrolled");
  }
}, { passive: true });