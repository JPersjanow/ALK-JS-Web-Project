import { NavButton } from "./NavButton";
import { ReadMoreImage } from "../assets/icons/ReadMoreImage";

export function ReadMoreButton(compontentFunction, text) {
  if (!text) {
    text = "Read More";
  }
  const readMoreButtonContainer = document.createElement("div");
  const readMoreButton = NavButton(text, compontentFunction);
  const readMoreImage = ReadMoreImage();

  readMoreButtonContainer.classList.add(
    "button-container",
    "button-container--info"
  );
  readMoreButton.classList.add("button");

  readMoreButtonContainer.addEventListener("click", () => {
    const navigateEvent = new CustomEvent("navigate", {
      detail: compontentFunction,
    });
    document.body.dispatchEvent(navigateEvent);
  });

  readMoreButtonContainer.append(readMoreImage, readMoreButton);
  return readMoreButtonContainer;
}
