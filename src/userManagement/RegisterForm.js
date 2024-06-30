import axios from "axios";
import * as api from "../api/constants.js"
import { CookieManager } from "../cookies/CookieManager";
import { Home } from "../views/Home";
import { RegisterButton } from "./RegisterButton";

export function RegisterForm(modal) {
  const registerForm = document.createElement("div");

  registerForm.innerHTML = `
    <form class="user-management-form" id="registerForm">
    <p class="header-x-small">Welcome, new one!</p>
    <input type="text" placeholder="Enter Username" name="uname" required>
    <input type="text" placeholder="Enter First Name" name="fname" required>
    <input type="text" placeholder="Enter Last Name" name="lname" required>
    <input type="text" placeholder="Enter Password" name="pass" required>
    </form>
  `;

  const registerButton = RegisterButton(true);
  registerForm.querySelector("form").append(registerButton);

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let usernameFormValue = event.target[0].value;
    let firstNameFromValue = event.target[1].value;
    let lastNameFromValue = event.target[2].value;
    let passwordFromValue = event.target[3].value;
    axios
      .get(`${api.URL}/users?username=eq.${usernameFormValue}`, api.CONFIG)
      .then((response) => {
        if (response.data.length === 0) {
          let payload = {
            username: usernameFormValue,
            password: passwordFromValue,
            fname: firstNameFromValue,
            lname: lastNameFromValue,
          };
          return axios.post(`${api.URL}/users`, payload, api.CONFIG);
        } else {
          throw Error(
            `Username ${usernameFormValue} taken, please choose different one!`
          );
        }
      })
      .then((response) => {
        if (response.status === 201) {
          alert("You have been registered succesfully!");
          CookieManager.loginUser(
            usernameFormValue,
            firstNameFromValue,
            lastNameFromValue
          );
          const navigateEvent = new CustomEvent("navigate", {
            detail: Home,
          });
          document.body.dispatchEvent(navigateEvent);
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  });

  if (modal) {
    registerForm.classList.add("modal");
    registerForm.style.display = "none";
    registerForm.querySelector("form").classList.add("modal-content");
    const registerModalCloseButton = document.createElement("button");
    registerModalCloseButton.innerText = "X";
    registerModalCloseButton.classList.add("close");
    registerForm.querySelector("form").append(registerModalCloseButton);

    registerModalCloseButton.addEventListener("click", () => {
      registerForm.style.display = "none";
    });

    window.onclick = function (event) {
      if (event.target == registerForm) {
        registerForm.style.display = "none";
      }
    };
  }

  return registerForm;
}
