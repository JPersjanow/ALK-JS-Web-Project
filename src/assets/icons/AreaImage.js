import AreaIcon from "./AreaIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const AreaImage = () => {
  const image = ImageCreator(AreaIcon, "area-icon");
  return image;
};
