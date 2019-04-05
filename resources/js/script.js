// $(document).ready(function() {
//   $(".js-section-about").waypoint(
//     function(direction) {
//       if (direction == "down") {
//         $("nav").addClass("sticky");
//       } else {
//         $("nav").removeClass("sticky");
//       }
//     },
//     {
//       offset: "60px;"
//     }
//   );

// Humbergur
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("main-nav");
});

// smooth scrolling
function smoothScroll(ev) {
  const section = document.getElementById(ev.currentTarget.hash.substr(1));
  if (section !== null) {
    ev.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  }
}
