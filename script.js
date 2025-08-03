const translations = {
  en: {
    page_title: "Luxem Swiss Coin (LSC)",
    hero_title: "Luxem Swiss Coin (LSC)",
    hero_description: "Not a meme coin. No rug pull. Pure luxury utility...",
    countdown: "Loading countdown..."
  },
  pl: {
    page_title: "Luxem Swiss Coin (LSC)",
    hero_title: "Luxem Swiss Coin (LSC)",
    hero_description: "Nie jest to meme coin. Bez oszustwa. Czysta luksusowa użyteczność...",
    countdown: "Ładowanie odliczania..."
  },
  fr: {
    page_title: "Luxem Swiss Coin (LSC)",
    hero_title: "Luxem Swiss Coin (LSC)",
    hero_description: "Ce n’est pas un meme coin. Aucun scam. Une vraie utilité de luxe...",
    countdown: "Chargement du compte à rebours..."
  }
};

function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || el.textContent;
  });

  // Update page <title>
  if (translations[lang]["page_title"]) {
    document.title = translations[lang]["page_title"];
  }

  localStorage.setItem("lang", lang);
}

// Auto-load saved language
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  switchLanguage(savedLang);
});

