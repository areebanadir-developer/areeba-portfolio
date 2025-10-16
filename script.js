let burger = document.querySelector('.burger');
let sideMenu = document.getElementById('sideMenu');
let overlay = document.getElementById('menuOverlay');

burger.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close menu when overlay is clicked
overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});
