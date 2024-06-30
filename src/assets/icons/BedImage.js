import { ImageCreator } from "./ImageCreator";
import BedIcon from "./BedIcon.svg";

export const BedImage = () => {
  const image = ImageCreator(BedIcon, "bed-icon");
  return image;
};
