const images = document.querySelectorAll(".images__image");
const modal = document.querySelector(".modal");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    modal.children[0].src = image.getAttribute("src");
    modal.style.transition = "opacity 0.3s ease-in-out";
    modal.style.opacity = "1";
    document.body.style.overflow = "hidden";
  });
  image.addEventListener("mouseout", () => {
    modal.style.opacity = "0";
    document.body.style.overflow = "visible";
    modal.children[0].src = "";
  });
});
