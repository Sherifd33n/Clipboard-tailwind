const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  menuBtn.classList.toggle("bg-red");
});
