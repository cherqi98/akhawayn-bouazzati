// Numéro WhatsApp de l'entreprise (format international, sans "+")
const WHATSAPP_NUMBER = "212600000000";

const header = document.getElementById("header");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Header shadow on scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// Mobile menu
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
});
menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    menu.classList.remove("open");
  })
);

// Active menu link
const sections = document.querySelectorAll("section[id]");
const navLinks = menu.querySelectorAll("a:not(.btn)");
const updateActiveLink = () => {
  const y = window.scrollY + window.innerHeight * 0.4;
  let current = sections[0].id;
  sections.forEach((s) => {
    if (s.offsetTop <= y) current = s.id;
  });
  navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
};
window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Animated counters
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString("fr-FR");
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));

// Quote form -> WhatsApp
document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const text =
    `Bonjour, je souhaite un devis :\n` +
    `• Nom : ${data.get("nom")}\n` +
    `• Téléphone : ${data.get("tel")}\n` +
    `• Service : ${data.get("service")}\n` +
    `• Date : ${data.get("date") || "-"}\n` +
    `• Passagers : ${data.get("pax") || "-"}\n` +
    `• Message : ${data.get("message") || "-"}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  document.getElementById("formNote").textContent = "Merci ! Votre demande s'ouvre dans WhatsApp.";
  e.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
