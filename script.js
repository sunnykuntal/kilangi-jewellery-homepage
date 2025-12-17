 /* ===============================
   HELPERS
=============================== */
const isMobile = () => window.innerWidth <= 768;

/* ===============================
   1. MOBILE MENU (HEADER + NAVBAR)
=============================== */
(function () {
  const header = document.querySelector(".header");
  const navbar = document.querySelector(".navbar");

  if (!header || !navbar) return;

  // Create hamburger
  const menuBtn = document.createElement("div");
  menuBtn.className = "mobile-menu-btn";
  menuBtn.innerHTML = "☰";

  header.prepend(menuBtn);

  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
  });
})();

/* ===============================
   2. SEARCH INPUT FOCUS EFFECT
=============================== */
(function () {
  const input = document.querySelector(".search-box input");
  if (!input) return;

  input.addEventListener("focus", () => {
    input.parentElement.classList.add("active");
  });

  input.addEventListener("blur", () => {
    input.parentElement.classList.remove("active");
  });
})();

/* ===============================
   3. BESTSELLER TABS (ACTIVE STATE)
=============================== */
(function () {
  const tabs = document.querySelectorAll(".bestseller-tabs button");
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
})();

/* ===============================
   4. PRODUCT CARD INTERACTIONS
=============================== */
(function () {
  const cards = document.querySelectorAll(".product-card");
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hover");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hover");
    });

    card.addEventListener("click", () => {
      alert("Product clicked (demo interaction)");
    });
  });
})();

/* ===============================
   5. MOBILE PDF ORDER FIX (IMPORTANT)
=============================== */
(function () {
  const body = document.body;

  function applyMobileOrder() {
    if (!isMobile()) return;

    const orderSelectors = [
      ".hero",
      ".features",
      ".bestseller",
      ".collection-section",
      ".recently-viewed",
      ".gift-section",
      ".promo-section",
      ".celebrate-section",
      ".ethos-section",
      ".future-section",
      ".testimonial-section",
      ".info-circles",
      ".footer"
    ];

    orderSelectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) body.appendChild(el);
    });
  }

  window.addEventListener("load", applyMobileOrder);
  window.addEventListener("resize", applyMobileOrder);
})();

/* ===============================
   6. TESTIMONIAL MOBILE SCROLL
=============================== */
(function () {
  const grid = document.querySelector(".testimonial-grid");
  if (!grid) return;

  grid.addEventListener("wheel", e => {
    if (isMobile()) {
      e.preventDefault();
      grid.scrollLeft += e.deltaY;
    }
  });
})();

/* ===============================
   7. HEADER SHADOW ON SCROLL
=============================== */
(function () {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
})();

/* ===============================
   8. FOOTER ACCORDION (MOBILE)
=============================== */
(function () {
  const titles = document.querySelectorAll(".footer-col h4");
  if (!titles.length) return;

  titles.forEach(title => {
    title.addEventListener("click", () => {
      if (isMobile()) {
        title.parentElement.classList.toggle("open");
      }
    });
  });
})();

/* ===============================
   9. BUTTON CLICK FEEDBACK
=============================== */
(function () {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 150);
    });
  });
})();