// Remove all content in #content div
const deleteContent = () => {
  const content = document.getElementById("content");
  const children = Array.from(content.children);

  children.forEach((child) => {
    if (child.id != "header") {
      content.removeChild(child);
    }
  });
};

export default deleteContent;
