const navbar = document.querySelector('#nav')

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  });
  // show sidebar
  navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
  });
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
  