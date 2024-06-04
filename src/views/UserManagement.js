import { LoginForm } from "../users/LoginForm";
import { RegisterForm } from "../users/RegisterForm";

export function UserManagement() {
  const section = document.createElement("section");
  section.innerHTML = `
  <h2>Hello!</h2>
  `;

  const loginModal = LoginForm(true);

  const loginButton = document.createElement("button");
  loginButton.innerText = "Log in";

  loginButton.addEventListener("click", () => {
    loginModal.style.display = "block";
  });

  const registerModal = RegisterForm(true);

  const registerButton = document.createElement("button");
  registerButton.innerText = "Register";

  registerButton.addEventListener("click", () => {
    registerModal.style.display = "block";
  });

  section.append(loginModal);
  section.append(registerModal);
  section.append(loginButton);
  section.append(registerButton);
  return section;
}
