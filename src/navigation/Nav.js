import { CookieManager } from "../cookies/CookieManager";
import { NavButton } from "./NavButton";
import { Home } from "../views/Home";
import { RoomList } from "../views/RoomList";
import { TreatmentList } from "../views/TreatmentList";
import { Cart } from "../views/Cart";
import { UserManagement } from "../views/UserManagement";
import { LogoutButton } from "../users/LogoutButton";
import { UserPage } from "../views/UserPage";

const navItems = [
  { text: "Home", compontentFunction: Home },
  { text: "Rooms", compontentFunction: RoomList },
  { text: "Treatments", compontentFunction: TreatmentList },
  { text: "Cart", compontentFunction: Cart },
];

export function Nav() {
  const userData = CookieManager.getUserData();

  const nav = document.createElement("nav");
  nav.classList.add("navbar");
  const navDiv = document.createElement("div");
  const navButtons = navItems.map((navItem) =>
    NavButton(navItem.text, navItem.compontentFunction)
  );
  navDiv.append(...navButtons);
  nav.append(navDiv);

  if (userData.userLogged) {
    const navUserInfo = document.createElement("div");
    const userPage = NavButton("My profile", UserPage);
    navDiv.append(userPage);
    const logoutButton = LogoutButton();
    navDiv.append(logoutButton);
    navUserInfo.innerHTML = `
    <h3>Hello ${userData.username}</h3>
    `;
    navDiv.append(navUserInfo);
  } else {
    const loginButton = NavButton("Log In", UserManagement);
    navDiv.append(loginButton);
  }
  return nav;
}
