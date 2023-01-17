
import home from "./home";
import menu from "./menu";
import about from "./about";
import contact from "./contact";

const content = document.getElementById("content");
content.appendChild(home());
const homeNav = document.querySelector("[data-key='home']");
homeNav.classList.add("active");

const navElements = document.querySelectorAll("li");
navElements.forEach(el => {
  el.addEventListener("click", () => {
    navElements.forEach(el => el.classList.remove("active"));
    el.classList.add("active");
    content.textContent = "";
    const data = el.dataset.key;
    switch (data) {
      case "home":
        content.appendChild(home());
        break;
      case "menu":
        content.appendChild(menu());
        break;
      case "about":
        content.appendChild(about());
        break;
      case "contact":
        content.appendChild(contact());
        break;
    }
  });
  
});