// Numéro WhatsApp de l'entreprise (format international, sans "+")
const WHATSAPP_NUMBER = "212633523470";

// Traductions arabes (le français est le texte d'origine dans index.html)
const AR = {
  nav_home: "الرئيسية",
  nav_services: "خدماتنا",
  nav_tourism: "السياحة",
  nav_fleet: "أسطولنا",
  nav_why: "لماذا نحن",
  nav_quote: "اطلب عرض سعر",
  hero_eyebrow: "نقل المستخدمين والسياحة",
  hero_title: "سافر <em>بثقة</em>،<br>واصل في الوقت.",
  hero_text: "تضمن شركة الأخوين البوعزاتي النقل اليومي لموظفيكم وتنظم رحلاتكم عبر ربوع المغرب، بأسطول حديث وسائقين ذوي خبرة.",
  hero_cta1: "احصل على عرض سعر مجاني",
  hero_cta2: "اتصل بنا",
  badge1: "احترام المواعيد",
  badge2: "سيارات مكيفة",
  badge3: "متوفرون 7/7",
  stat1: "سنوات من الخبرة",
  stat2: "مركبة",
  stat3: "شركة شريكة",
  stat4: "مسافر شهرياً",
  services_title: "حلول نقل على المقاس",
  services_text: "سواء كنتم شركة أو وكالة أسفار أو أفراداً، نكيّف خدماتنا حسب احتياجاتكم.",
  s1_title: "نقل المستخدمين",
  s1_text: "رحلات يومية من المنزل إلى العمل للمصانع ومراكز الاتصال والمناطق الصناعية، بمسارات مدروسة ومواعيد مضبوطة.",
  s5_badge: "+8 أشخاص",
  s5_title: "نقل المجموعات من وإلى المطار",
  s5_text: "نوصل ركابكم إلى المطار ونستقبلهم منه ابتداءً من 8 أشخاص: عائلات، فرق عمل، مجموعات سياحية. مع تتبع الرحلات الجوية والتكفل بالأمتعة.",
  s5_option: "نقل مجموعة إلى المطار (+8 أشخاص)",
  s2_title: "التنقل من وإلى المطار",
  s2_text: "استقبال شخصي وتنقلات بين المطار والمحطة والفندق لزبنائكم ومستخدميكم والمجموعات السياحية.",
  s3_title: "رحلات وجولات سياحية",
  s3_text: "جولات سياحية عبر المغرب: المدن العتيقة، الصحراء، الجبال والساحل الأطلسي، مع سائق مرشد.",
  s4_title: "المناسبات والندوات",
  s4_text: "نقل المجموعات للأعراس والمؤتمرات والندوات المهنية والرحلات المدرسية، براحة تامة.",
  tour_title: "اكتشفوا المغرب معنا",
  tour_text: "وجهات لا تُنسى وراحة فاخرة على الطريق.",
  d1_tag: "مدينة إمبراطورية", d1_name: "مراكش", d1_text: "المدينة العتيقة، ساحة جامع الفنا وحديقة ماجوريل",
  d2_tag: "الجوهرة الزرقاء", d2_name: "شفشاون", d2_text: "أزقة زرقاء في قلب الريف",
  d3_tag: "الصحراء", d3_name: "مرزوكة", d3_text: "كثبان عرق الشبي وليلة تحت النجوم",
  d4_tag: "الساحل الأطلسي", d4_name: "الصويرة", d4_text: "الميناء والأسوار والشواطئ",
  d5_tag: "ثقافة", d5_name: "فاس", d5_text: "أقدم مدينة عتيقة في العالم",
  d6_tag: "الجبل", d6_name: "إفران والأطلس", d6_text: "غابات الأرز والهواء النقي",
  fleet_eyebrow: "أسطولنا",
  fleet_title: "مركبات حديثة لكل الاحتياجات",
  v1_title: "فان / ميني فان", v1_seats: "7 – 9 مقاعد", v1_text: "مثالي لتنقلات كبار الشخصيات والمجموعات الصغيرة.",
  v2_title: "ميني باص", v2_seats: "17 – 30 مقعداً", v2_text: "مثالي لنقل المستخدمين ورحلات المطار.",
  v3_title: "حافلة سياحية كبرى", v3_seats: "45 – 55 مقعداً", v3_text: "راحة فاخرة للجولات والمسافات الطويلة.",
  why_eyebrow: "لماذا تختاروننا",
  why_title: "الطريق مهنتنا، ورضاكم أولويتنا",
  why_text: "منذ بدايتنا، نرافق الشركات والمسافرين بنفس الالتزام: السلامة، احترام المواعيد والراحة.",
  why_cta: "لنتحدث عن مشروعكم",
  w1_title: "السلامة أولاً", w1_text: "مركبات تخضع للصيانة بانتظام، مؤمَّنة ومطابقة للمعايير.",
  w2_title: "سائقون محترفون", w2_text: "ذوو خبرة، لبقون ومدرَّبون على السياقة الوقائية.",
  w3_title: "احترام المواعيد", w3_text: "مسارات مخططة ومتابعة لوصول دائم في الوقت المحدد.",
  w4_title: "أسعار تنافسية", w4_text: "عروض مناسبة وشفافة، بدون مصاريف خفية.",
  contact_eyebrow: "اتصل بنا",
  contact_title: "اطلب عرض سعر مجاني",
  contact_text: "املأ الاستمارة وسنرد عليك بسرعة عبر واتساب أو الهاتف.",
  c_phone: "الهاتف",
  c_email: "البريد الإلكتروني",
  c_hours: "التوفر",
  c_hours_val: "7/7 — 24/24 ساعة",
  f_name: "الاسم الكامل", f_name_ph: "اسمك",
  f_service: "نوع الخدمة", f_choose: "— اختر —",
  f_opt_tour: "رحلة / جولة سياحية",
  f_date: "التاريخ",
  f_pax: "عدد الركاب", f_pax_ph: "مثال: 20",
  f_msg: "الرسالة", f_msg_ph: "المسار، التوقيت، رقم الرحلة...",
  f_submit: "أرسل عبر واتساب",
  footer_text: "نقل المستخدمين والسياحة بالمغرب. السلامة، الراحة واحترام المواعيد.",
  footer_nav: "روابط",
  rights: "جميع الحقوق محفوظة.",
};

const FORM_TEXT = {
  fr: {
    intro: "Bonjour, je souhaite un devis :",
    name: "Nom", tel: "Téléphone", service: "Service", date: "Date", pax: "Passagers", msg: "Message",
    thanks: "Merci ! Votre demande s'ouvre dans WhatsApp.",
    switchLabel: "العربية",
  },
  ar: {
    intro: "السلام عليكم، أرغب في عرض سعر:",
    name: "الاسم", tel: "الهاتف", service: "الخدمة", date: "التاريخ", pax: "عدد الركاب", msg: "الرسالة",
    thanks: "شكراً! سيتم فتح طلبك في واتساب.",
    switchLabel: "Français",
  },
};

const header = document.getElementById("header");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const langSwitch = document.getElementById("langSwitch");

// Language switch (FR / AR)
// Each element keeps its original French text so switching back restores it exactly
const I18N = [
  ["[data-i18n]", "i18n", "textContent"],
  ["[data-i18n-html]", "i18nHtml", "innerHTML"],
  ["[data-i18n-ph]", "i18nPh", "placeholder"],
].flatMap(([selector, key, prop]) =>
  [...document.querySelectorAll(selector)].map((el) => ({ el, key: el.dataset[key], prop, fr: el[prop] }))
);

let lang = "fr";
const setLang = (next) => {
  lang = next;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  I18N.forEach(({ el, key, prop, fr }) => (el[prop] = lang === "ar" ? AR[key] ?? fr : fr));
  langSwitch.textContent = FORM_TEXT[lang].switchLabel;
  try { localStorage.setItem("lang", lang); } catch (e) {}
};
langSwitch.addEventListener("click", () => setLang(lang === "fr" ? "ar" : "fr"));
try { if (localStorage.getItem("lang") === "ar") setLang("ar"); } catch (e) {}

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
  const t = FORM_TEXT[lang];
  const data = new FormData(e.target);
  const text =
    `${t.intro}\n` +
    `• ${t.name} : ${data.get("nom")}\n` +
    `• ${t.tel} : ${data.get("tel")}\n` +
    `• ${t.service} : ${data.get("service")}\n` +
    `• ${t.date} : ${data.get("date") || "-"}\n` +
    `• ${t.pax} : ${data.get("pax") || "-"}\n` +
    `• ${t.msg} : ${data.get("message") || "-"}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  document.getElementById("formNote").textContent = t.thanks;
  e.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
