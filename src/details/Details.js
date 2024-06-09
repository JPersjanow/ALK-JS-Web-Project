import { Detail } from "./Detail";

export function Details(detailsContents) {
  const detailsContainer = document.createElement("div");

  detailsContents.forEach((element) => {
    let detail = Detail(element.image, element.text, element.tooltipText);
    detailsContainer.append(detail);
  });

  detailsContainer.classList.add("detail-container-no-max-width");

  return detailsContainer;
}
