export default function questions() {
  const circleRed = document.querySelectorAll(".circle-red");
  const aws = document.querySelectorAll(".aws");
  let bxQs = document.querySelectorAll(".bx-qs");
  bxQs.forEach((i) => {
    i.style.height = "61px";
  });

  function showAws() {
    let divResp = this.parentNode.parentNode.firstElementChild.children;
    let fahter = this.parentNode.parentNode.firstElementChild
    console.log(fahter)
    let resp = divResp[1];

    resp.classList.toggle("active");
    if (resp.classList.contains("active")) {
       fahter.style.height = "initial";
    } else {
       fahter.style.height = "61px";
       circleRed.style.border = '2px solid green'
    }
  }
  circleRed.forEach((i) => {
    i.addEventListener("click", showAws);
  });
}
