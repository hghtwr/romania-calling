/* Romania Calling – site interactions */

(function () {
  'use strict';

  // Animate cards into view using IntersectionObserver when available
  if (!('IntersectionObserver' in window)) return;

  const cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();
