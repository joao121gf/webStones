// seuArquivo.js
import mobileNavbar from "/scripts/mobileNavbar.js";
import scrollSmooth from "/scripts/scrollSmooth.js";
import animatePhone from "/scripts/animatePhone.js";
import showContainers from "./scripts/showContainers.js";

window.addEventListener("load", function () {
  mobileNavbar();
  scrollSmooth();
  animatePhone();
  showContainers();
});
