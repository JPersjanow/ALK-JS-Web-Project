import { LoginForm } from "../userManagement/LoginForm";
import { RegisterForm } from "../userManagement/RegisterForm";
import { RegisterButton } from "../userManagement/RegisterButton";
const tropicalLeaves = new URL('../assets/images/tropicalLeaves.png', import.meta.url).href

export function UserManagement() {
  const section = document.createElement("section");
  section.innerHTML = `
  <div class="header-container">
    <div class="header-img-container">
      <h2 class="header-medium">Are you ready?<img src="${tropicalLeaves}"/></h2>
    </div>
    <p>To spend some money... and relax!</p>
  </div>  
  `;

  const loginWindow = LoginForm(false);
  const registerModal = RegisterForm(true);

  const registerButton = RegisterButton();
  registerButton.innerText = "Register";

  registerButton.addEventListener("click", () => {
    registerModal.style.display = "block";
  });

  section.append(loginWindow);
  section.append(registerModal);
  loginWindow.append(registerButton);
  return section;
}
