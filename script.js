// Personalise the links below before publishing.
const portfolioConfig = {
  email: "your.email@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/"
};

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("emailButton").href = `mailto:${portfolioConfig.email}`;
document.getElementById("githubLink").href = portfolioConfig.github;
document.getElementById("linkedinLink").href = portfolioConfig.linkedin;

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
