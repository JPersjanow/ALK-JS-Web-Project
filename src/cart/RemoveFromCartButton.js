import { Cart } from "../views/Cart";
import { CookieManager } from "../cookies/CookieManager";
import { RemoveImage } from "../assets/icons/RemoveImage";

export function RemoveFromCartButton(item) {
  const removeFromButtonContainer = document.createElement("div");
  const removeImage = RemoveImage();

  removeFromButtonContainer.classList.add(
    "button-container",
    "button-container--danger"
  );

  removeFromButtonContainer.addEventListener("click", () => {
    CookieManager.removeFromCart(item);
    const navigateEvent = new CustomEvent("navigate", {
      detail: Cart,
    });
    document.body.dispatchEvent(navigateEvent);
  });

  removeFromButtonContainer.append(removeImage);
  return removeFromButtonContainer;
}
