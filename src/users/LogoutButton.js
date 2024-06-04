import { CookieManager } from "../cookies/CookieManager";

export function LogoutButton() {
  const logoutButton = document.createElement("button");
  logoutButton.innerText = "Log Out";

  logoutButton.addEventListener("click", () => {
    CookieManager.logoutUser();
    window.location.reload();
  });

  return logoutButton;
}
