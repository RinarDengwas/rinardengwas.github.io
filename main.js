// js/main.js

// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate top bar to center (translateX(0))
          if (entry.target.classList.contains('bar-top')) {
            entry.target.classList.remove('opacity-0', '-translate-x-10');
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }

          // Animate bottom bar to offset right (translateX(10)) for final position
          if (entry.target.classList.contains('bar-bottom')) {
            entry.target.classList.remove('opacity-0', 'translate-x-20');
            entry.target.classList.add('opacity-100', 'translate-x-10');
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.bar-top, .bar-bottom').forEach((el) =>
    observer.observe(el)
  );
});

 function animateBars() {
    const barsTop = document.querySelector('.bar-top');
    const barsBottom = document.querySelector('.bar-bottom');
    const rect = barsTop.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      barsTop.style.opacity = '1';
      barsTop.style.transform = 'translateX(0)';
      barsBottom.style.opacity = '1';
      barsBottom.style.transform = 'translateX(40px)';
    }
  }

  window.addEventListener('scroll', animateBars);
  window.addEventListener('load', animateBars);