import axios from "axios";
import { CookieManager } from "../cookies/CookieManager";
import { Home } from "../views/Home";

export function LoginForm(modal) {
  const loginForm = document.createElement("div");
  loginForm.innerHTML = `
    <form id="loginForm" onSubmit=>
    <input type="text" placeholder="Enter Username" name="uname" required>
    <input type="text" placeholder="Enter Password" name="pass" required>
    <button type="submit">Login</button>
    </form>
  `;

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let usernameFormValue = event.target[0].value;
    let passwordFormValue = event.target[1].value;
    axios
      .get(`http://localhost:3000/users?username=${usernameFormValue}`)
      .then((response) => {
        if (response.data.length === 0) {
          throw Error(
            `User ${usernameFormValue} does not exist! Register firts :)`
          );
        }

        if (passwordFormValue === response.data[0].password) {
          CookieManager.loginUser(
            response.data[0].username,
            response.data[0].firstName,
            response.data[0].lastName
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
    const loginModalCloseButton = document.createElement("button");
    loginModalCloseButton.innerText = "X";
    loginModalCloseButton.addEventListener("click", () => {
      loginForm.style.display = "none";
    });
    loginForm.append(loginModalCloseButton);
  }

  return loginForm;
}
