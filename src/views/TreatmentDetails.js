import { AddToCartButton } from "../cart/AddToCartButton";
import { Details } from "../details/Details";
import { PriceImage } from "../assets/icons/PriceImage";
import { TimeImage } from "../assets/icons/TimeImage";
import { AreaImage } from "../assets/icons/AreaImage";
const tropicalLeaves = new URL('../assets/images/tropicalLeaves.png', import.meta.url).href

export function TreatmentDetails(treatment) {
  const section = document.createElement("section");
  section.innerHTML = `
      <div class="header-container">
        <div class="header-img-container">
          <h2 class="header-small">${treatment.name}<img src="${tropicalLeaves}"/></h2>
        </div>
      </div>
      <div class="details-images-container">
        <img class="card-image" src="${treatment.image}" alt="Picture of ${treatment.name}"/>
      </div>  
      <div class="details-description-container">
      </div>
      `;

  const detailsContainer = section.querySelector(
    ".details-description-container"
  );
  const addToCartButton = AddToCartButton(treatment);
  const details = Details([
    {
      image: TimeImage(),
      text: `${treatment.time} min`,
      tooltipText: `Treatment takes ${treatment.time} minutes`,
    },
    {
      image: AreaImage(),
      text: treatment.area,
      tooltipText: `Treatment area: ${treatment.area} `,
    },
    {
      image: PriceImage(),
      text: treatment.price,
      tooltipText: `Treatment costs ${treatment.price} PLN`,
    },
  ]);
  detailsContainer.append(details);

  section.append(detailsContainer, addToCartButton);
  return section;
}
