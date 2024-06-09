import PriceIcon from "./PriceIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const PriceImage = () => {
  const image = ImageCreator(PriceIcon, "price-icon");
  return image;
};
