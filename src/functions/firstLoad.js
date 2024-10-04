// Import header and home component
import header from "../pages/header";
import home from "../pages/home";

const firstLoad = () => {
  const content = document.querySelector("#content");
  content.appendChild(header());
  home();
};

export default firstLoad;
