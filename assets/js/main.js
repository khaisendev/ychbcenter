AOS.init({ duration: 700, offset: 100,easing: 'ease-in-out', once: false});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scrollTop', `${document.documentElement.scrollTop}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.footer__form');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const name = form.querySelector('.footer__form-name').value;
      const email = form.querySelector('.footer__form-email').value;
      const message = form.querySelector('.footer__form-textarea').value;
      const formData = {
          name: name,
          email: email,
          message: message
      };
      console.log(formData);
      form.reset();
  });
});