export function LoginButton() {
  const loginButtonContainer = document.createElement("div");
  const loginButton = document.createElement("button");

  loginButtonContainer.classList.add("button-container-no-icon");
  loginButton.classList.add("button");
  loginButton.setAttribute("type", "submit");

  loginButton.textContent = "Log in";

  loginButtonContainer.append(loginButton);
  return loginButtonContainer;
}
