export default function showContainers() {
  window.addEventListener("load", () => {
    const posVert = window.scrollY;
    console.log(posVert);
    const gridLose = document.querySelector(".grid-lose");
    const services = document.querySelector(".father-services");
    const projects = document.querySelector(".projects");
    const redLine = document.querySelectorAll(".red-line");
    const casal = document.querySelector(".father-care");
    const quest = document.querySelector(".left-quest");
    const tog = document.querySelector(".box-tog");
    const containers = [gridLose, services, projects, casal, quest, tog];
    containers.forEach((i) => {
      i.style.opacity = 0;
      i.style.transition = "opacity .3s ease";
    });

    function chama() {
      let posVert =
        window.pageYOffset || document.documentElement.scrollTop || 0;
      console.log(posVert);
      let larguraJanela = window.innerWidth;
      if (larguraJanela < 500) {
        if (posVert > 250) {
          gridLose.classList.add("animaWindow");
          gridLose.style.opacity = 1;
        }
        if (posVert > 1600) {
          services.style.opacity = 1;
          services.classList.add("animaWindow");
          redLine.forEach((element, index) => {
            setTimeout(function () {
              element.style.width = "100%";
            }, 1000 * index);
          });
        }
        if (posVert > 4300) {
          projects.classList.add("animaWindow");
          projects.style.opacity = 1;
        }
        if (posVert > 7500) {
          casal.classList.add("animaWindow");
          casal.style.opacity = 1;
        }
        if (posVert > 8798) {
          quest.classList.add("animaWindow");
          quest.style.opacity = 1;
        }
        if (posVert > 12757) {
          tog.classList.add("animaWindow");
          tog.style.opacity = 1;
        }
      }
    }

    window.addEventListener("touchmove", chama);
    window.addEventListener("scroll", chama);
  });
}
