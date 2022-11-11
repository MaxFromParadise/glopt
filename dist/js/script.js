const navbar = document.querySelector("nav"),
      line1 = document.querySelector(".navbar__close-line1"),
      line2 = document.querySelector(".navbar__close-line2"),
      line3 = document.querySelector(".navbar__close-line3"),
      close = document.querySelector(".navbar__close");

close.addEventListener("click", () => {
    navbar.classList.toggle("active"),
    line1.classList.toggle("navbar__close-line-active"),
    line2.classList.toggle("navbar__close-line-active"),
    line3.classList.toggle("navbar__close-line-active");
});


