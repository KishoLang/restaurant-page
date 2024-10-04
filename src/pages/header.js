// Header Div gets created here

const header = () => {
  const headerDiv = document.createElement("div");
  headerDiv.id = "header";

  const home = document.createElement("button");
  home.id = "header-home";
  home.innerHTML = "HOME";
  headerDiv.appendChild(home);

  const menu = document.createElement("button");
  menu.id = "header-menu";
  menu.innerHTML = "MENU";
  headerDiv.appendChild(menu);

  const about = document.createElement("button");
  about.id = "header-about";
  about.innerHTML = "ABOUT";
  headerDiv.appendChild(about);

  return headerDiv;
};

export default header;
