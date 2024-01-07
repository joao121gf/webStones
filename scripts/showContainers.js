export default function showContainers() {
  const gridLose = document.querySelector(".grid-lose");
  const services = document.querySelector(".father-services");
  const redLine = document.querySelectorAll(".red-line");
  const containers = [gridLose, services];
  containers.forEach((i) => {
    i.style.opacity = 0;
    i.style.transition = "opacity .3s ease";
  });

  function chama() {
    const height = gridLose.offsetTop;
    const windowAct = window.scrollY;
    console.log(window.scrollY);
    if (windowAct > 450) {
      gridLose.classList.add("animaWindow");
      gridLose.style.opacity = 1;
    }
    if (windowAct > 1705) {
      services.style.opacity = 1;
      services.classList.add("animaWindow");
      redLine.forEach((element, index) => {
        setTimeout(function () {
          element.style.width = "100%";
        }, 1000 * index);
      });
    }
  }
  window.addEventListener("scroll", chama);
}
