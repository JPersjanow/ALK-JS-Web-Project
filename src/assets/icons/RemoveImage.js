import { ImageCreator } from "./ImageCreator";
import RemoveIcon from "./RemoveIcon.svg";

export const RemoveImage = () => {
  const image = ImageCreator(RemoveIcon, "remove-icon");
  return image;
};
