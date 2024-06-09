export function Detail(detailImage, text, tooltipText, singleDetail) {
  const detailContainer = document.createElement("a");
  const detailText = document.createElement("p");
  detailContainer.setAttribute("title", tooltipText);

  if (singleDetail) {
    detailContainer.classList.add("detail-container");
  } else {
    detailContainer.classList.add("detail-container-no-shadow");
  }

  detailText.classList.add("detail-text");
  detailText.textContent = text;
  detailContainer.append(detailImage, detailText);
  return detailContainer;
}
