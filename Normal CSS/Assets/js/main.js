//Boton de menu hamburguesa en mobile
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("hamburger-btn")
    .addEventListener("click", function () {
      var nav = document.getElementById("nav");
      if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex";
      } else {
        nav.style.display = "none";
      }
    });
});
