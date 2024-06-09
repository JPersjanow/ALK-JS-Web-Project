import { CookieManager } from "../cookies/CookieManager";
import { ClaendarImage } from "../assets/icons/CalendarImage";
import { ResetImage } from "../assets/icons/ResetImage";
import { DateInput } from "./DateInput";

function bookingDatesCheck(dateForm, dateTo) {
  if (dateForm === "" || dateTo === "") {
    throw Error("Booking dates cannot be empty!");
  }
}

function bookingDateComparator(dateFrom, dateTo) {
  let dateFromObject = Date.parse(dateFrom);
  let dateToObject = Date.parse(dateTo);
  let today = Date.now();

  if (dateFromObject <= today || dateToObject <= today) {
    throw Error("Booking must be set in the future");
  }

  if (dateToObject < dateFromObject) {
    throw Error("Check-out date must be later than Check-in date");
  }

  let yearCountBetweenDates =
    new Date(dateToObject - dateFromObject).getFullYear() - 1970;

  if (yearCountBetweenDates > 0) {
    throw Error("Booking dates cannot be more than one year apart");
  }
}

export function BookingForm(page, bookingDates, resetDatesConfirmation) {
  const navigateEvent = new CustomEvent("navigate", {
    detail: page,
  });

  const dateSection = document.createElement("section");
  dateSection.classList.add("booking-form-container");
  const dateForm = document.createElement("form");
  dateForm.classList.add("booking-form");
  const dateInputContainer = document.createElement("div");
  dateInputContainer.classList.add("booking-form-input-container");

  const dateFromInput = DateInput("dateFrom", "date-picker", "Check-in Date");
  const dateToInput = DateInput("dateTo", "date-picker", "Check-out Date");

  const dateSubmitButtonContainer = document.createElement("div");
  dateSubmitButtonContainer.classList.add("button-container");
  const dateSubmitButton = document.createElement("button");
  dateSubmitButton.type = "submit";
  dateSubmitButton.innerText = "Choose Dates";
  dateSubmitButton.classList.add("button");
  const calendarImage = ClaendarImage();
  dateSubmitButtonContainer.append(calendarImage, dateSubmitButton);

  const dateResetButtonContainer = document.createElement("div");
  dateResetButtonContainer.classList.add("button-container");
  const dateResetButton = document.createElement("button");
  dateResetButton.innerText = "Reset Dates";
  dateResetButton.classList.add("button");
  const resetImage = ResetImage();

  dateResetButtonContainer.append(resetImage, dateResetButton);

  if (bookingDates) {
    dateFromInput.value = bookingDates.dateFrom;
    dateToInput.value = bookingDates.dateTo;
  }

  dateSubmitButtonContainer.addEventListener("click", () => {
    dateForm.dispatchEvent(new SubmitEvent("submit"));
  });

  dateForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      let dateFromFormValue = event.target[0].value;
      let dateToFormValue = event.target[1].value;

      bookingDateComparator(dateFromFormValue, dateToFormValue);
      bookingDatesCheck(dateFromFormValue, dateToFormValue);

      CookieManager.setBookingDates(dateFromFormValue, dateToFormValue);
    } catch (error) {
      alert(error.message);
      CookieManager.removeBookingDates();
    } finally {
      document.body.dispatchEvent(navigateEvent);
    }
  });

  dateResetButtonContainer.addEventListener("click", (event) => {
    let confirmReset = true;
    if (resetDatesConfirmation) {
      confirmReset = confirm("Are you sure you want to reset dates?");
    }
    if (confirmReset) {
      CookieManager.removeBookingDates();
      document.body.dispatchEvent(navigateEvent);
    }
  });

  dateInputContainer.append(dateFromInput, dateToInput);
  dateForm.append(
    dateInputContainer,
    dateSubmitButtonContainer,
    dateResetButtonContainer
  );
  dateSection.append(dateForm);
  return dateSection;
}
