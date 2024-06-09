import { CookieManager } from "../cookies/CookieManager";
import tropicalLeaves from "../assets/images/tropicalLeaves.png";

export function UserPage() {
  const userData = CookieManager.getUserData();
  const userDetails = document.createElement("section");

  userDetails.innerHTML = `
    <div class="header-container">
    <div class="header-img-container">
      <h2 class="header-small">Nice to see you ${userData.firstName}<img src="${tropicalLeaves}"/></h2>
    </div>
    <p>Hope you are having a great day!</p>
    </div>
    `;

  return userDetails;
}
