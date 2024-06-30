import { ImageCreator } from "./ImageCreator";
import ReadMoreIcon from "./ReadMoreIcon.svg";

export const ReadMoreImage = () => {
  const image = ImageCreator(ReadMoreIcon, "read-more-icon");
  return image;
};
