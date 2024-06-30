import { ImageCreator } from "./ImageCreator";
import AreaIcon from "./AreaIcon.svg";

export const AreaImage = () => {
  const image = ImageCreator(AreaIcon, "area-icon");
  return image;
};
