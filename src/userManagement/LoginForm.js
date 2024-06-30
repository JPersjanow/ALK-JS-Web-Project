import axios from "axios";
import * as api from "../api/constants.js"
import { CookieManager } from "../cookies/CookieManager";
import { Home } from "../views/Home";
import { LoginButton } from "./LoginButton";

export function LoginForm(modal) {
  const loginButton = LoginButton();
  const loginForm = document.createElement("div");
  loginForm.classList.add("login-form-container");
  loginForm.innerHTML = `
    <form class="user-management-form" id="loginForm">
    <input type="text" placeholder="Username" name="uname" required>
    <input type="password" placeholder="Password" name="pass" required>
    </form>
    <p class="header-x-small">Don't have an account yet?</p>
  `;

  loginForm.querySelector("form").append(loginButton);

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let usernameFormValue = event.target[0].value;
    let passwordFormValue = event.target[1].value;
    axios
      .get(`${api.URL}/users?username=eq.${usernameFormValue}`, api.CONFIG)
      .then((response) => {
        if (response.data.length === 0) {
          throw Error(
            `User ${usernameFormValue} does not exist! Register firts :)`
          );
        }

        if (passwordFormValue === response.data[0].password) {
          CookieManager.loginUser(
            response.data[0].username,
            response.data[0].fname,
            response.data[0].lname
          );
          const navigateEvent = new CustomEvent("navigate", {
            detail: Home,
          });
          document.body.dispatchEvent(navigateEvent);
          window.location.reload();
        } else {
          throw Error("Wrong password!");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  });

  if (modal) {
    loginForm.style.display = "none";
    loginForm.style.display = "none";
    loginForm.querySelector("form").classList.add("modal-content");
    const loginModalCloseButton = document.createElement("button");
    loginModalCloseButton.innerText = "X";
    loginModalCloseButton.addEventListener("click", () => {
      loginForm.style.display = "none";
    });
    loginForm.append(loginModalCloseButton);
  }

  return loginForm;
}
