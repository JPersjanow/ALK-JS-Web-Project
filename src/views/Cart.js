import { RemoveFromCartButton } from "../cart/RemoveFromCartButton";
import { CookieManager } from "../cookies/CookieManager";

export function Cart() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Cart</h2>
    <table class="table">
        <tr>
            <th>Name<th/>
            <th>Quantity<th/>
            <th>Price<th/>
        <tr/>
    <table/>
  `;

  const tableRows = CookieManager.getAllFromCart().map((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${item.name}<td/>
    <td>${item.quantity}<td/>
    <td>${(item.quantity * item.price).toFixed(2)} PLN<td/>
    <td><td/>
    `;

    const removeFromCartButton = RemoveFromCartButton(item);
    tr.lastElementChild.append(removeFromCartButton);
    return tr;
  });
  if (tableRows.length <= 0) {
    const div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = `
    <p>No items in cart<p/>
    `;
    return div;
  }

  const tableFooter = document.createElement("tr");
  tableFooter.innerHTML = `
    <td>TOTAL: ${CookieManager.getTotalPriceFromCart()} PLN<td/>
    `;

  section.querySelector("table").append(...tableRows, tableFooter);
  section.querySelector("table").append(...tableRows);
  return section;
}
