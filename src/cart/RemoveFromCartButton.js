import { Cart } from "../views/Cart";
import { CookieManager } from "../cookies/CookieManager";

export function RemoveFromCartButton(item) {
  const removeFromCartButton = document.createElement("button");
  removeFromCartButton.classList.add("btn");
  removeFromCartButton.textContent = "Remove From Cart";
  removeFromCartButton.addEventListener("click", () => {
    CookieManager.removeFromCart(item);
    const navigateEvent = new CustomEvent("navigate", {
      detail: Cart,
    });
    document.body.dispatchEvent(navigateEvent);
  });
  return removeFromCartButton;
}
