const bar = document.querySelector(".fa-bars");
const x = document.querySelector(".fa-xmark");
const nav = document.querySelector(".nav");

bar.addEventListener("click", () => {
  nav.classList.toggle("active");
  x.classList.toggle("active");
  bar.classList.toggle("active");
});