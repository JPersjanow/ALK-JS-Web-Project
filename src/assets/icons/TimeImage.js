import { ImageCreator } from "./ImageCreator";
import TimeIcon from "./TimeIcon.svg";

export const TimeImage = () => {
  const image = ImageCreator(TimeIcon, "time-icon");
  return image;
};
