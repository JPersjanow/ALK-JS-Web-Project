import { CookieManager } from "../cookies/CookieManager";
import { AddToCartImage } from "../assets/icons/AddToCartImage";
import { showPopupModal, hidePopupModal } from "../popup/PopupModal";

export function AddToCartButton(item) {
  const addToCartButtonContainer = document.createElement("div");
  const addToCartButton = document.createElement("button");
  const addToCartImage = AddToCartImage();

  addToCartButtonContainer.classList.add("button-container");
  addToCartButton.classList.add("button");

  addToCartButton.textContent = "Add To Cart";

  addToCartButtonContainer.addEventListener("click", () => {
    CookieManager.addToCart(item);
    showPopupModal();
    setTimeout(hidePopupModal, "2000");
  });

  addToCartButtonContainer.append(addToCartImage, addToCartButton);
  return addToCartButtonContainer;
}
