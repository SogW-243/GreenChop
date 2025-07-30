document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn = document.querySelector('.header__menu-toggle');
  var headerMenu = document.querySelector('.header-menu');

  if (toggleBtn && headerMenu) {
    toggleBtn.addEventListener('click', function() {
      headerMenu.classList.toggle('active');
    });
  }
});
