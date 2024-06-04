import { CookieManager } from "../cookies/CookieManager";

export function UserPage() {
  const userData = CookieManager.getUserData();
  const userDetails = document.createElement("section");

  userDetails.innerHTML = `
    <p>Your details</p>
    <h4>First Name: ${userData.firstName}</h4>
    <h4>Last Name: ${userData.lastName}</h4>
    `;

  const header = document.createElement("h2");
  header.innerText = `Nice to see you ${userData.username}!`;
  userDetails.append(header);
  return userDetails;
}
