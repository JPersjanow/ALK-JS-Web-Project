import "./style.css";

import { Nav } from "./src/navigation/Nav";
import { Home } from "./src/views/Home";

const app = document.querySelector("#app");
app.before(Nav());
app.append(Home());

document.body.addEventListener("navigate", (event) => {
  const Component = event.detail;

  app.innerHTML = "";
  app.append(Component());
});
