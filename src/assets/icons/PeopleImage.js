import { ImageCreator } from "./ImageCreator";
import PeopleIcon from "./PeopleIcon.svg";

export const PeopleImage = () => {
  const image = ImageCreator(PeopleIcon, "people-icon");
  return image;
};
