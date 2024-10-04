// Import images from assets here

const about = () => {
  const content = document.getElementById("content");
  const headline = document.createElement("h2");
  headline.innerHTML = "Contact us!";
  content.appendChild(headline);
};

export default about;
