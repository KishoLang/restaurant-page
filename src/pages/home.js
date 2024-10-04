// Import images from ....assets

const home = () => {
  const content = document.getElementById("content");
  const headline = document.createElement("h2");
  headline.innerHTML = "Welcome to our amazing restaurant page";
  content.appendChild(headline);
};

export default home;
