import PeopleIcon from "./PeopleIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const PeopleImage = () => {
  const image = ImageCreator(PeopleIcon, "people-icon");
  return image;
};
