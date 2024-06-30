import { CookieManager } from "../cookies/CookieManager";
import { RoomList } from "./RoomList";
import { RemoveFromCartButton } from "../cart/RemoveFromCartButton";
import { BookingForm } from "../booking/BookingForm";
import { Detail } from "../details/Detail";
import { PriceImage } from "../assets/icons/PriceImage";
const tropicalLeaves = new URL('../assets/images/tropicalLeaves.png', import.meta.url).href

export function Cart() {
  const bookingDates = CookieManager.getBookingDates();
  const section = document.createElement("section");

  section.innerHTML = `
    <div class="header-container">
    <div class="header-img-container">
      <h2 class="header-medium">Cart<img src="${tropicalLeaves}"/></h2>
    </div>
    <p>Feel free to spend your money!</p>
    </div>
    <table class="table">
      <thead class="table-header">
        <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    
  `;

  if (bookingDates) {
    const bookingFormHeader = document.createElement("h3");
    bookingFormHeader.textContent =
      "You can also change the date of your stay with us!";
    const bookingForm = BookingForm(RoomList, bookingDates, true);
    section.append(bookingFormHeader, bookingForm);
  }

  const tableRows = CookieManager.getAllFromCart().map((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("table-row");
    tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.quantity}</td>
    <td id="price">${(item.quantity * item.price).toFixed(2)} PLN</td>
    <td></td>
    `;

    const removeFromCartButton = RemoveFromCartButton(item);
    tr.lastElementChild.append(removeFromCartButton);
    return tr;
  });
  if (tableRows.length <= 0) {
    const section = document.createElement("section");
    section.innerHTML = `
    <section-100-vh>
      <div class="header-container">
      <div class="header-img-container">
        <h2 class="header-small">No items in cart!<img src="${tropicalLeaves}"/></h2>
      </div>
      <p>Check out our rooms, treatments and splurge yourself</p>
      </div>
    </section-100-vh>
    
    `;
    return section;
  }

  const tableFooter = document.createElement("div");
  tableFooter.classList.add("table-footer");
  const totalPriceDetail = Detail(
    PriceImage(),
    `Total: ${CookieManager.getTotalPriceFromCart()} PLN`,
    "Total cost",
    true
  );
  tableFooter.append(totalPriceDetail);
  section.querySelector("tbody").append(...tableRows);
  section.querySelector("table").after(tableFooter);
  return section;
}
