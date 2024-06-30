import { CookieManager } from "../cookies/CookieManager";
import { BookingForm } from "../booking/BookingForm";
import { RoomList } from "./RoomList";
const tropicalLeaves = new URL('../assets/images/tropicalLeaves.png', import.meta.url).href

export function UserPage() {
  const userData = CookieManager.getUserData();
  const bookingDates = CookieManager.getBookingDates();
  const section = document.createElement("section");

  section.innerHTML = `
    <div class="header-container">
    <div class="header-img-container">
      <h2 class="header-small">Nice to see you ${userData.firstName}<img src="${tropicalLeaves}"/></h2>
    </div>
    <p>Hope you are having a great day!</p>
    <h3 class="header-date">Book a stay with us on Rooms page</h3>
    </div>
    `;

  if (bookingDates) {
    const options = { month: "long", day: "numeric" };
    section.querySelector(
      ".header-date"
    ).textContent = `You have planned your stay with us from ${new Date(
      bookingDates.dateFrom
    ).toLocaleDateString("en-us", options)} to ${new Date(
      bookingDates.dateTo
    ).toLocaleDateString("en-us", options)}!`;

    const lineBreaker = document.createElement("span");
    lineBreaker.classList.add("br");
    const bookingFormHeader = document.createElement("h3");
    bookingFormHeader.textContent = "You can also change the dates";
    const bookingForm = BookingForm(RoomList, bookingDates, true);
    section.append(lineBreaker, bookingFormHeader, bookingForm);
  }

  return section;
}
