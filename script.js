const navBtn = document.querySelector(".nav-btn");
const mobileNav = document.querySelector(".nav-mobile");
const logo = document.querySelector(".nav-logo");
const formUsername = document.querySelector(".formUsername");
const formSubmitBtn = document.querySelector(".formSubmitButton");

navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("overflow-hidden");

  if (navBtn.classList.contains("active")) {
    logo.tabIndex = "-1";
    formUsername.tabIndex = "-1";
    formSubmitBtn.tabIndex = "-1";
  } else {
    logo.tabIndex = "";
    formUsername.tabIndex = "";
    formSubmitBtn.tabIndex = "";
  }
});
