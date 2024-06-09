import CalendarIcon from "./CalendarIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const ClaendarImage = () => {
  const image = ImageCreator(CalendarIcon, "calendar-icon");
  return image;
};
