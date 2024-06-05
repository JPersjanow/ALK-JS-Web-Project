import { CookieManager } from "../cookies/CookieManager";

function bookingDateComparator(dateFrom, dateTo) {
  let dateFromObject = Date.parse(dateFrom);
  let dateToObject = Date.parse(dateTo);
  let today = Date.now();

  if (dateFromObject <= today || dateToObject <= today) {
    throw Error("Booking must be set in the future");
  }

  if (dateToObject < dateFromObject) {
    throw Error("From Date must be later then To Date");
  }

  let yearCountBetweenDates =
    new Date(dateToObject - dateFromObject).getFullYear() - 1970;

  if (yearCountBetweenDates > 0) {
    throw Error("Booking dates cannot be more then one year apart");
  }
}

export function BookingForm(page, bookingDates, resetDatesConfirmation) {
  const navigateEvent = new CustomEvent("navigate", {
    detail: page,
  });

  const dateSection = document.createElement("section");

  const dateForm = document.createElement("form");
  const dateFromInput = document.createElement("input");
  dateFromInput.type = "date";
  dateFromInput.id = "dateFrom";
  const dateToInput = document.createElement("input");
  dateToInput.type = "date";
  dateToInput.id = "dateTo";
  const dateSubmitButton = document.createElement("button");
  dateSubmitButton.type = "submit";
  dateSubmitButton.innerText = "Choose Dates";
  const dateResetButton = document.createElement("button");
  dateResetButton.type = "submit";
  dateResetButton.innerText = "Reset Dates";

  if (bookingDates) {
    dateFromInput.value = bookingDates.dateFrom;
    dateToInput.value = bookingDates.dateTo;
  }

  dateForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();
      let dateFromFormValue = event.target[0].value;
      let dateToFormValue = event.target[1].value;

      bookingDateComparator(dateFromFormValue, dateToFormValue);

      CookieManager.setBookingDates(dateFromFormValue, dateToFormValue);
    } catch (error) {
      alert(error.message);
      CookieManager.removeBookingDates();
    } finally {
      document.body.dispatchEvent(navigateEvent);
    }
  });

  dateResetButton.addEventListener("click", (event) => {
    let confirmReset = true;
    if (resetDatesConfirmation) {
      confirmReset = confirm("Are you sure you want to reset dates?");
    }
    if (confirmReset) {
      CookieManager.removeBookingDates();
      document.body.dispatchEvent(navigateEvent);
    }
  });

  dateForm.append(dateFromInput, dateToInput, dateSubmitButton);
  dateSection.append(dateForm, dateResetButton);
  return dateSection;
}
