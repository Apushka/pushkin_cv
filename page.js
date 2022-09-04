const modal = document.querySelector(".modal");

const imagesContainer = document.querySelector(".description__images");

imagesContainer.addEventListener("click", (e) => {
  const image = e.target;
  if (window.innerWidth > 767 || image.tagName === "VIDEO") {
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
