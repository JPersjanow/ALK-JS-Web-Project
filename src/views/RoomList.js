import axios from "axios";
import { AddToCartButton } from "../cart/AddToCartButton";
import { RoomDetails } from "./RoomDetails";
import { ReadMoreButton } from "../navigation/ReadMoreButton";
import { CookieManager } from "../cookies/CookieManager";
import { BookingForm } from "../booking/BookingForm";
import { Loading } from "../loading/Loading";
import tropicalLeaves from "../assets/images/tropicalLeaves.png";

export function RoomList() {
  const bookingDates = CookieManager.getBookingDates();
  const section = document.createElement("section");
  const bookingForm = BookingForm(RoomList, bookingDates, false);
  const loadingParagprah = Loading();

  section.innerHTML = `
  <div class="header-container">
    <div class="header-img-container">
      <h2 class="header-big">Rooms<img src="${tropicalLeaves}"/></h2>
    </div>
    <p>Our rooms may not be the best, but also they are not the cheapest!</p>
    <h3 class="rooms-date-header">Choose Check-in and Check-out dates:</h3>
  </div>  
    `;

  section.append(bookingForm);

  if (bookingDates) {
    section.append(loadingParagprah);

    const div = document.createElement("div");
    div.classList.add("card-list");

    axios.get("http://localhost:3000/rooms").then((response) => {
      const roomsCards = response.data.map((room) => {
        const roomCard = document.createElement("div");
        roomCard.classList.add("card");

        const roomCardTitle = document.createElement("h4");
        roomCardTitle.classList.add("card-title");
        roomCardTitle.textContent = room.name;

        const roomCardBody = document.createElement("div");
        roomCardBody.classList.add("card-body");

        const roomCardPrice = document.createElement("p");
        roomCardPrice.classList.add("card-price");
        roomCardPrice.textContent = `${room.price.toFixed(2)} PLN`;

        roomCardBody.append(roomCardPrice);

        const roomImage = document.createElement("img");
        roomImage.classList.add("card-image");
        roomImage.setAttribute("src", room.image);
        roomImage.setAttribute("loading", "lazy");

        const roomButtonsContainer = document.createElement("div");
        roomButtonsContainer.classList.add("card-buttons");

        const addToCartButton = AddToCartButton(room);
        const readMoreButton = ReadMoreButton(() => RoomDetails(room));
        roomButtonsContainer.append(addToCartButton, readMoreButton);
        roomCardBody.append(roomButtonsContainer);

        roomCard.append(roomCardTitle, roomImage, roomCardBody);
        return roomCard;
      });
      div.append(...roomsCards);
      section.append(div);
      section.querySelector(".loading").remove();

      const options = { month: "long", day: "numeric" };
      section.querySelector(
        ".rooms-date-header"
      ).textContent = `We have found available rooms for your stay from ${new Date(
        bookingDates.dateFrom
      ).toLocaleDateString("en-us", options)} to ${new Date(
        bookingDates.dateTo
      ).toLocaleDateString("en-us", options)}!`;
    });
  }
  return section;
}
