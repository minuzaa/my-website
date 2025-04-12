document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".skill-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, i * 150); // animasi satu per satu
    });
  });