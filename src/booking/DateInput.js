export const DateInput = (id, stylingClass, text) => {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = id;
  dateInput.classList.add(stylingClass);
  const dateLabel = document.createElement("label");
  dateLabel.textContent = text;
  dateLabel.setAttribute("for", id);
  dateLabel.classList.add("hide");
  dateInput.before(dateInput);
  return dateInput;
};
