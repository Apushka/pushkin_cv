const modal = document.querySelector(".modal");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_active");
  nav.classList.toggle("nav_active");
  document.body.classList.toggle("lock");
});

nav.addEventListener("click", () => {
  nav.classList.remove("nav_active");
  burger.classList.remove("burger_active");
  document.body.classList.remove("lock");
});

const imagesContainer = document.querySelector(".description__images");

imagesContainer.addEventListener("click", (e) => {
  if (window.innerWidth > 767) {
    const image = e.target;
    modal.children[0].src = image.getAttribute("src");
    if (image.tagName === "VIDEO") modal.children[0].play();
    modal.style.top = "0";
    modal.style.opacity = "1";
    document.body.style.overflow = "hidden";
  }
});

modal.addEventListener("click", () => {
  modal.style.top = "-100%";
  modal.style.opacity = "0";
  document.body.style.overflow = "visible";
});
