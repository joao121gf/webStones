export default function animatePhone() {
  const imgCell = document.querySelector(".mobile-photo img");
  const circle1 = document.querySelector(".circle-popUpTop");
  const circle2 = document.querySelector(".circle-popUp");

  imgCell.style.opacity = 0;
  setTimeout(function () {
    imgCell.classList.add("activeCell");
    imgCell.style.opacity = 1;

    setTimeout(function () {
      circle1.style.opacity = 1;
      setTimeout(function () {
        circle2.style.opacity = 1;
      }, 1500);
    }, 2000);
  }, 1000);
}
