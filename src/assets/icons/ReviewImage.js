import { ImageCreator } from "./ImageCreator";
import ReviewIcon from "./ReviewIcon.svg";

export const ReviewImage = () => {
  const image = ImageCreator(ReviewIcon, "review-icon");
  return image;
};
