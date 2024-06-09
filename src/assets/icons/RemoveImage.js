import RemoveIcon from "./RemoveIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const RemoveImage = () => {
  const image = ImageCreator(RemoveIcon, "remove-icon");
  return image;
};
