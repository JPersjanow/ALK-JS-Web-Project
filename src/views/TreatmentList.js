import axios from "axios";
import * as api from "../api/constants.js"
import { AddToCartButton } from "../cart/AddToCartButton";
import { ReadMoreButton } from "../navigation/ReadMoreButton";
import { TreatmentDetails } from "./TreatmentDetails";
import { Loading } from "../loading/Loading";
import tropicalLeaves from "../assets/images/tropicalLeaves.png";

export function TreatmentList() {
  const section = document.createElement("section");
  const loadingParagprah = Loading();

  section.innerHTML = `
    <div class="header-container">
    <div class="header-img-container">
      <h2 class="header-medium">Treatments<img src="${tropicalLeaves}"/></h2>
    </div>
    <p>Any wierd likes? We got it covered!</p>
  </div> 
  `;

  const table = document.createElement("table");
  table.classList.add("table");
  table.innerHTML = `
  <colgroup>
       <col span="1">
       <col span="1">
       <col span="1">
  </colgroup>
  `;
  const thead = document.createElement("thead");
  thead.classList.add("table-header");
  const tbody = document.createElement("tbody");
  thead.innerHTML = `<th>Treatment</th><th>Price</th><th></th>`;
  table.append(thead);
  table.append(tbody);
  section.append(loadingParagprah);

  axios.get(`${api.URL}/treatments`, api.CONFIG)
    .then((treatments) => {
      const rows = treatments.data.map((treatment) => {
        const row = document.createElement("tr");
        row.classList.add("table-row");
        row.innerHTML = `
        <td>${treatment.name}</td>
        <td id="price">${treatment.price.toFixed(2)} PLN</td>
        <td></td>
        `;
        const readMoreButton = ReadMoreButton(() =>
          TreatmentDetails(treatment)
        );
        const addToCartButton = AddToCartButton(treatment);
        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("table-buttons");
        buttonsContainer.append(addToCartButton, readMoreButton);
        row.lastElementChild.append(buttonsContainer);
        return row;
      });
      tbody.append(...rows);
      section.append(table);
      section.querySelector(".loading").remove();
    });

  return section;
}
