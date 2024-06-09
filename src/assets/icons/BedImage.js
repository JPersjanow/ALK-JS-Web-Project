import BedIcon from "./BedIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const BedImage = () => {
  const image = ImageCreator(BedIcon, "bed-icon");
  return image;
};
