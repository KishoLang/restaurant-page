// Import images from assets

const menu = () => {
  const content = document.getElementById("content");
  const headline = document.createElement("h2");
  headline.innerHTML = "This is our brand new menu";
  content.appendChild(headline);
};

export default menu;
