export default function showContainers() {
  window.addEventListener("load", () => {
    const posVert = window.scrollY;
    const gridLose = document.querySelector(".grid-lose");
    const services = document.querySelector(".father-services");
    const projects = document.querySelector(".projects");
    const redLine = document.querySelectorAll(".red-line");
    const casal = document.querySelector(".father-care");
    const quest = document.querySelector(".questions-container");
    const tog = document.querySelector(".box-tog");
    const circle = document.querySelector(".circle2");
    const footer = document.querySelector(".father-footer");
    let lineRed = document.querySelector(".line-red");

    const containers = [
      gridLose,
      services,
      projects,
      casal,
      quest,
      tog,
      circle,
      footer,
    ];
    containers.forEach((i) => {
      i.style.opacity = 0;
      i.style.transition = "opacity .3s ease";
    });

    function chama() {
      let posVert =
        window.pageYOffset || document.documentElement.scrollTop || 0;
      let larguraJanela = window.innerWidth;
      if (larguraJanela < 735) {
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
        if (posVert > 10343) {
          tog.classList.add("animaWindow");
          tog.style.opacity = 1;
        }
        if (posVert > 11438) {
          footer.classList.add("animaWindow");
          footer.style.opacity = 1;
        }

      } else {
        if (posVert > 300) {
          gridLose.classList.add("animaWindow");
          gridLose.style.opacity = 1;
        }
        if (posVert > 1700) {
          services.style.opacity = 1;
          services.classList.add("animaWindow");
          redLine.forEach((element, index) => {
            setTimeout(function () {
              element.style.width = "100%";
            }, 1000 * index);
          });
        }
        if (posVert > 3513) {
          projects.classList.add("animaWindow");
          projects.style.opacity = 1;
        }
        if (posVert > 5317) {
          casal.classList.add("animaWindow");
          casal.style.opacity = 1;
        }
        if (posVert > 6278) {
          quest.classList.add("animaWindow");
          quest.style.opacity = 1;
          setTimeout(function () {
            circle.style.opacity = 1;
            lineRed.style.opacity = 1;
          }, 2000);
        }
        if (posVert > 7478) {
          tog.classList.add("animaWindow");
          tog.style.opacity = 1;
        }
        if (posVert > 8222) {
          footer.classList.add("animaWindow");
          footer.style.opacity = 1;
        }
      }
    }

    window.addEventListener("touchmove", chama);
    window.addEventListener("scroll", chama);
  });
}
