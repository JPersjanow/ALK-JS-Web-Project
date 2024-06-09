import CartIcon from "./CartIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const CartImage = () => {
  const image = ImageCreator(CartIcon, "cart-icon");
  return image;
};
