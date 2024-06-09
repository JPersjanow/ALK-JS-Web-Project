import TimeIcon from "./TimeIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const TimeImage = () => {
  const image = ImageCreator(TimeIcon, "time-icon");
  return image;
};
