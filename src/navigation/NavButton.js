export function NavButton(text, compontentFunction) {
  const navButton = document.createElement("button");
  navButton.classList.add("nav");
  navButton.textContent = text;
  navButton.addEventListener("click", () => {
    const navigateEvent = new CustomEvent("navigate", {
      detail: compontentFunction,
    });
    document.body.dispatchEvent(navigateEvent);
  });
  return navButton;
}
