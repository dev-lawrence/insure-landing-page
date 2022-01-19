const menuIcon = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('a');

// add height to nav menu
const showNav = () => {
  nav.classList.toggle('showHeight');
  menuIcon.classList.toggle('active');
};

// remove nav when any nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    showNav();
  });
});

// EVENT LISTENERS
menuIcon.addEventListener('click', showNav);
