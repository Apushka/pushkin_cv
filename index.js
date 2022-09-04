const skills = document.querySelectorAll(".skills__item");
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".item__link");
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

function renderChart() {
  window.setTimeout(() => {
    skills.forEach((skill) => {
      const children = skill.children;
      children[1].style.width = children[children.length - 1].innerHTML;
      children[2].style.left = children[children.length - 1].innerHTML;
    });
  });
}

let timer = null;

window.addEventListener("scroll", () => {
  if (timer !== null) {
    window.clearTimeout(timer);
  }
  timer = window.setTimeout(() => {
    sections.forEach((section, sIndex) => {
      const isContain = links[sIndex].classList.contains("item__link_active");
      if (
        section.getBoundingClientRect().top >= -100 &&
        section.getBoundingClientRect().top <= window.innerHeight / 1.5
      ) {
        if (!isContain) {
          links[sIndex].classList.add("item__link_active");
          if (section.id === "skills") renderChart();
        }
      } else {
        if (isContain) {
          links[sIndex].classList.remove("item__link_active");
        }
      }
    });
  }, 50);
});
