import { AddToCartButton } from "../cart/AddToCartButton";
import { NavButton } from "../navigation/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";

export function TreatmentList() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Treatments</h2>
    <p class="loading">Loading...<p/>
  `;

  const table = document.createElement("table");
  table.classList.add("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  thead.innerHTML = `<td>Treatment<td/><td>Price<td/>`;
  table.append(thead);
  table.append(tbody);

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const rows = treatments.map((treatment) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${treatment.name}<td/>
        <td>${treatment.price.toFixed(2)} PLN<td/>
        `;
        const readMoreButton = NavButton("Read More", () =>
          TreatmentDetails(treatment)
        );
        const addToCartButton = AddToCartButton(treatment);
        row.lastElementChild.append(addToCartButton, readMoreButton);
        return row;
      });
      tbody.append(...rows);
      section.append(table);
      section.querySelector(".loading").remove();
    });

  return section;
}
