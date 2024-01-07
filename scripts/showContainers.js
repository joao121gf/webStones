export default function showContainers() {
  const gridLose = document.querySelector(".grid-lose");
  const services = document.querySelector(".father-services");
  const projects = document.querySelector(".projects");
  const redLine = document.querySelectorAll(".red-line");
  const containers = [gridLose, services, projects];
  containers.forEach((i) => {
    i.style.opacity = 0;
    i.style.transition = "opacity .3s ease";
  });

  function chama() {
    const windowAct = window.pageYOffset || document.documentElement.scrollTop;
    console.log(windowAct);

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

    if (windowAct > 3600) {
      projects.classList.add("animaWindow");
      projects.style.opacity = 1;
    }
  }
  window.addEventListener('scroll', chama);
}
