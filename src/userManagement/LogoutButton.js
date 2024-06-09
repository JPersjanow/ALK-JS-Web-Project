import { CookieManager } from "../cookies/CookieManager";

export function LogoutButton() {
  const logoutButtonContainer = document.createElement("div");
  const logoutButton = document.createElement("button");

  logoutButtonContainer.classList.add("button-container-no-icon");
  logoutButton.classList.add("button");
  logoutButton.innerText = "Log Out";

  logoutButton.addEventListener("click", () => {
    CookieManager.logoutUser();
    window.location.reload();
  });

  logoutButtonContainer.append(logoutButton);

  return logoutButtonContainer;
}
