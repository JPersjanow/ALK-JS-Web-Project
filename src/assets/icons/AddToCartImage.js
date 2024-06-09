import { ImageCreator } from "./ImageCreator";
import AddToCartIcon from "./AddToCartIcon.svg";

export const AddToCartImage = () => {
  const image = ImageCreator(AddToCartIcon, "cart-icon");
  return image;
};
