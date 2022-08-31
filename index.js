const skills = document.querySelectorAll(".skills__item");
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".item__link");

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
        section.getBoundingClientRect().top >= 0 &&
        section.getBoundingClientRect().top <= window.innerHeight
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
