const nav_phone = document.querySelector(".nav_phone");
const navmenu = document.querySelector(".navmenu");
const nav_list = document.querySelectorAll(".nav_list");

nav_phone.addEventListener("click", mobileMenu);
nav_list.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  nav_phone.classList.toggle("active_nav_phone");
  navmenu.classList.toggle("active_nav_phone");
  nav_phone.classList.toggle("animation_nav_phone_lines");
}

function closeMenu() {
  nav_phone.classList.remove("active_nav_phone");
  navmenu.classList.remove("active_nav_phone");
}
let p_alert = document.querySelector(".project_alert");
p_alert.addEventListener("click", (e) => {
  e.preventDefault();

  alert(
    `Currently, this page is not available.
[Work is under Process]

It will be available very soon.
Inconvenience regretted!`
  );
  alert(`This Website is my First Project.`);
});
