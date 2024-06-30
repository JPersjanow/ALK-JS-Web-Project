import { ImageCreator } from "./ImageCreator";
import CalendarIcon from "./CalendarIcon.svg";

export const ClaendarImage = () => {
  const image = ImageCreator(CalendarIcon, "calendar-icon");
  return image;
};
