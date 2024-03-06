document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLink = document.querySelector('.nav__link');

  hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
  });

  function closeNavbar() {
    navLink.classList.add('hide');
  }

  const aboutLink = document.querySelector('a[href="#about-section"]');
  aboutLink.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.getElementById('about-section');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
      closeNavbar(); // Close the navbar after clicking
    }
  });

  const contactLink = document.querySelector('a[href="#contact-section"]');
  contactLink.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.getElementById('contact-section');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
      closeNavbar(); // Close the navbar after clicking
    }
  });

  // Close navbar when clicking on any link in the navbar
  const navbarLinks = document.querySelectorAll('.nav__link a');
  navbarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeNavbar();
    });
  });
});
