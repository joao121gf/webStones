export default function questions() {
  const circleRed = document.querySelectorAll(".circle-red");
  const aws = document.querySelectorAll(".aws");

  function showAws() {
    console.log(circleRed[0]);
    console.log(this)
    for (var i = 1; i < circleRed.length + 1; i++) {
      if (this == circleRed[i]){
        aws[1].style.display = 'block'
        console.log('ok')
      }
    }
  }
  circleRed.forEach((i) => {
    i.addEventListener("click", showAws);
  });
}
