document.addEventListener("DOMContentLoaded", () => {
  // ===== Header sombra ao scroll =====
  const header = document.querySelector(".header");
  const toggleHeaderShadow = () => {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  };
  toggleHeaderShadow();
  window.addEventListener("scroll", toggleHeaderShadow);

  // ===== Smooth scroll para âncoras =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ===== FAQ interativo =====
  document.querySelectorAll(".faq__item summary").forEach(summary => {
    summary.addEventListener("click", () => {
      const parent = summary.parentElement;
      // Fecha outros itens
      document.querySelectorAll(".faq__item").forEach(item => {
        if (item !== parent) item.removeAttribute("open");
      });
    });
  });

  // ===== Botão flutuante WhatsApp =====
  const whatsappFloat = document.querySelector(".whatsapp-float");
  if (whatsappFloat) {
    whatsappFloat.addEventListener("click", () => {
      window.open("https://wa.me/seunumerodetelefone", "_blank");
    });
  }

  // ===== Ajustes responsivos ou pequenos efeitos extras =====
  // Ex: animação de cards ao passar mouse
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => card.classList.add("hovered"));
    card.addEventListener("mouseleave", () => card.classList.remove("hovered"));
  });
});