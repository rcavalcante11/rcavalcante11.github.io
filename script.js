let hamburguer = document.querySelector(".hamburguer");
let navLinks = document.getElementById(".nav-links");
let links = document.querySelectorAll(".links");

//display elements on the hamburguer
hamburguer.addEventListener("click", () => {
  navLinks.classList.toggle("hide");
  hamburguer.classList.toggle("lines-rotate");
});

//hide navlink container onclick any single link
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    navLinks.classList.toggle("hide");
  });
}
