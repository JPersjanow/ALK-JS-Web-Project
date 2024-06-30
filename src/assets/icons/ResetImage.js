import { ImageCreator } from "./ImageCreator";
import ResetIcon from "./ResetIcon.svg";

export const ResetImage = () => {
  const image = ImageCreator(ResetIcon, "reset-icon");
  return image;
};
