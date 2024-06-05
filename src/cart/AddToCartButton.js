import { CookieManager } from "../cookies/CookieManager";

export function AddToCartButton(item) {
  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("btn");
  addToCartButton.textContent = "Add To Cart";
  addToCartButton.addEventListener("click", () => {
    CookieManager.addToCart(item);
  });
  return addToCartButton;
}
