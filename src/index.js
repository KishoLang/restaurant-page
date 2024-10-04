// Entry point for the app
import "./styles.css";
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";
import firstLoad from "./functions/firstLoad";
import deleteContent from "./functions/deleteContent";

// FirstLoad
firstLoad();

// Get Header Buttons
const headerHome = document.getElementById("header-home");
const headerMenu = document.getElementById("header-menu");
const headerAbout = document.getElementById("header-about");

headerHome.addEventListener("click", () => {
  // Remove things from #content div
  // Add home content to #content div
  deleteContent();
  home();
});

headerMenu.addEventListener("click", () => {
  deleteContent();
  menu();
});

headerAbout.addEventListener("click", () => {
  deleteContent();
  about();
});
