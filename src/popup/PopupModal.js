export function PopupModal(options) {
  const popup = document.createElement("div");
  popup.classList.add("modal-popup");
  popup.id = "popupModal";

  if (options.hidden) {
    popup.classList.add("hidden");
  }

  popup.innerHTML = `
  <div class="popup-modal-content">
    <div class="popup-modal-header">
        <span class="close-popup">X</span>
        <h4>${options.text}</h4>
    </div>
  </div>
  `;

  window.onclick = function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };

  return popup;
}

export function showPopupModal() {
  var modal = document.getElementById("popupModal");
  modal.style.display = "block";
}

export function hidePopupModal() {
  var modal = document.getElementById("popupModal");
  modal.style.display = "none";
}
