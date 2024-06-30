import { ImageCreator } from "./ImageCreator";
import PriceIcon from "./PriceIcon.svg";

export const PriceImage = () => {
  const image = ImageCreator(PriceIcon, "price-icon");
  return image;
};
