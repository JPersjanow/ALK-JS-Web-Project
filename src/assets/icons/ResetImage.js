import ResetIcon from "./ResetIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const ResetImage = () => {
  const image = ImageCreator(ResetIcon, "reset-icon");
  return image;
};
