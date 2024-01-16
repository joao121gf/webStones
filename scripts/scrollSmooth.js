export default function scrollSmooth() {
  window.addEventListener("load", () => {
    const sections = document.querySelectorAll(".links");
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    sections.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  });
}
