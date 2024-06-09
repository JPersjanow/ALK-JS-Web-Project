import loadingAnimation from "../assets/icons/animations/loading.webm";

export const Loading = () => {
  const loadingContainer = document.createElement("div");
  loadingContainer.classList.add("loading");
  const loadingVideo = document.createElement("video");
  loadingVideo.setAttribute("width", "100");
  loadingVideo.setAttribute("height", "100");
  loadingVideo.setAttribute("autoplay", null);
  loadingVideo.setAttribute("loop", null);

  const loadingSource = document.createElement("source");
  loadingSource.setAttribute("type", "video/webm");
  loadingSource.setAttribute("src", loadingAnimation);
  loadingVideo.append(loadingSource);

  loadingContainer.append(loadingVideo);
  return loadingContainer;
};
