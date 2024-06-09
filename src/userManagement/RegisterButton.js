export function RegisterButton(submit) {
  const registerButtonContainer = document.createElement("div");
  const registerButton = document.createElement("button");

  registerButtonContainer.classList.add("button-container-no-icon");
  registerButton.classList.add("button");
  if (submit) {
    registerButton.setAttribute("type", "submit");
  }

  registerButton.textContent = "Register";

  registerButtonContainer.append(registerButton);
  return registerButtonContainer;
}
