export const ImageCreator = (image, stylingClass) => {
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);
  imageElement.setAttribute("loading", "lazy");
  imageElement.classList.add(stylingClass, "icon");
  imageElement.setAttribute("alt", stylingClass);
  return imageElement;
};
