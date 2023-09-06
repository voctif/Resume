function setCardHoverEffect() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card) => {
  
      card.addEventListener('mouseover', () => {
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.style.filter = 'blur(2.5px)';
          }
        });
      });
  
      card.addEventListener('mouseout', () => {
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.style.filter = 'none';
          }
        });
      });
  
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    // quando a página carrega, adiciona a classe "animar"
    document.getElementById("texto-animado").classList.add("animar");
  });
