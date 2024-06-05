import axios from "axios";
import { AddToCartButton } from "../cart/AddToCartButton";
import { RoomDetails } from "./RoomDetails";
import { NavButton } from "../navigation/NavButton";
import { CookieManager } from "../cookies/CookieManager";
import { BookingForm } from "../booking/BookingForm";

export function RoomList() {
  const bookingDates = CookieManager.getBookingDates();
  const section = document.createElement("section");
  const bookingForm = BookingForm(RoomList, bookingDates, false);

  section.innerHTML = `
    <h2>Rooms</h2>
    `;

  section.append(bookingForm);

  if (bookingDates) {
    const loadingParagprah = document.createElement("p");
    loadingParagprah.innerText = "Loading Rooms...";
    loadingParagprah.classList.add("loading");
    section.append(loadingParagprah);
    const div = document.createElement("div");

    axios.get("http://localhost:3000/rooms").then((response) => {
      const roomsCards = response.data.map((room) => {
        const roomCard = document.createElement("div");
        roomCard.classList.add("card");
        const roomCardBody = document.createElement("div");
        roomCardBody.classList.add("card-body");
        roomCardBody.innerHTML = `
        <h4 class="card-title">${room.name}</h4>
        <p class="card-subtitle">${room.price.toFixed(2)} PLN</p>
        `;
        const addToCartButton = AddToCartButton(room);
        const readMoreButton = NavButton("Read More", () => RoomDetails(room));
        roomCardBody.lastElementChild.append(addToCartButton, readMoreButton);
        roomCard.append(roomCardBody);
        return roomCard;
      });
      div.append(...roomsCards);
      section.append(div);
      section.querySelector(".loading").remove();
    });
  }

  return section;
}
