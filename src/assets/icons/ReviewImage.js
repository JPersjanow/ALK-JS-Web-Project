import ReviewIcon from "./ReviewIcon.svg";
import { ImageCreator } from "./ImageCreator";

export const ReviewImage = () => {
  const image = ImageCreator(ReviewIcon, "review-icon");
  return image;
};
