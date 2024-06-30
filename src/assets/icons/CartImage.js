import { ImageCreator } from "./ImageCreator";
import CartIcon from "./CartIcon.svg";

export const CartImage = () => {
  const image = ImageCreator(CartIcon, "cart-icon");
  return image;
};
