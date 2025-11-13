document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll('.fade-in');

  function checkFadeIn() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkFadeIn);
  checkFadeIn(); // للتشغيل عند أول تحميل
});