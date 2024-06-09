import "./src/styles/main.scss";

import { Nav } from "./src/navigation/Nav";
import { Home } from "./src/views/Home";
import background from "./src/assets/videos/background.mp4";
import { PopupModal } from "./src/popup/PopupModal";

const app = document.querySelector("#app");

const backgroundVideo = document.createElement("video");
backgroundVideo.setAttribute("autoplay", "");
backgroundVideo.setAttribute("muted", "");
backgroundVideo.setAttribute("loop", "");
backgroundVideo.classList.add("background-video");
const backgroundSource = document.createElement("source");
backgroundSource.setAttribute("src", background);
backgroundSource.setAttribute("type", "video/mp4");
backgroundVideo.append(backgroundSource);

app.before(backgroundVideo);
app.before(Nav());
app.append(Home());
app.after(PopupModal({ text: "Item added to cart" }));

document.body.addEventListener("navigate", (event) => {
  const Component = event.detail;

  app.innerHTML = "";
  app.append(Component());
});
