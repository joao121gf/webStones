export default function questions() {
  const circleRed = document.querySelectorAll(".circle-red");
  const aws = document.querySelectorAll(".aws");
  let bxQs = document.querySelectorAll(".bx-qs");
  let boxQsr = document.querySelectorAll(".box-questions");
  let qstRed = document.querySelectorAll(".qst-red");
  let lineRed = document.querySelector(".line-red");
  bxQs.forEach((i) => {
    i.style.height = "61px";
    i.style.transition = "height 0.7s ease";
  });

  // setTimeout(function () {
  //   lineRed.style.opacity = "1";
  // }, 2000);
  function showAws() {
    let divResp = this.parentNode.parentNode.firstElementChild.children;
    let fahter = this.parentNode.parentNode.firstElementChild;
    let f = this.parentNode.parentNode;
    let questRed = fahter.firstElementChild;
    let seta = this;
    let resp = divResp[1];

    const isOpen = resp.classList.contains("active");

    closeAllAnswers();

    resp.classList.toggle("active", !isOpen);

    if (resp.classList.contains("active")) {
      fahter.style.height = "1px";
      fahter.style.height = isOpen ? "61px" : `${resp.scrollHeight}px`;
      f.style.paddingBottom = "54px";
      this.style.border = "2px solid #ff3c3c";
      questRed.style.color = "#ff3c3c";
    } else {
      f.style.paddingBottom = "8px";
      this.style.border = "2px solid #939191";
      questRed.style.color = "black";
    }
  }

  function closeAllAnswers() {
    circleRed.forEach((i) => {
      const divResp = i.parentNode.parentNode.firstElementChild.children;
      const resp = divResp[1];
      const fahter = i.parentNode.parentNode.firstElementChild;
      i.style.border = "2px solid #939191";
      qstRed.forEach((i) => {
        i.style.color = "black";
      });

      boxQsr.forEach((i) => {
        i.style.paddingBottom = "8px";
      });

      resp.classList.remove("active");
      fahter.style.height = "61px";
    });
  }

  circleRed.forEach((i) => {
    i.addEventListener("click", showAws);
  });
}
