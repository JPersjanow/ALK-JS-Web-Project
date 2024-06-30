import { AddToCartButton } from "../cart/AddToCartButton";
import { BedImage } from "../assets/icons/BedImage";
import { PriceImage } from "../assets/icons/PriceImage";
import { PeopleImage } from "../assets/icons/PeopleImage";
import { ReviewImage } from "../assets/icons/ReviewImage";
import { Details } from "../details/Details";
const tropicalLeaves = new URL('../assets/images/tropicalLeaves.png', import.meta.url).href

export function RoomDetails(room) {
  const section = document.createElement("section");
  section.innerHTML = `
      <div class="header-container">
        <div class="header-img-container">
          <h2 class="header-small">${room.name}<img src="${tropicalLeaves}"/></h2>
        </div>
      </div>
      <div class="details-images-container">
        <img class="card-image" src="${room.image}" alt="Picture of ${room.name}"/>
        <img class="card-image" src="${room.image2}" alt="Picture of ${room.name}"/>
      </div>  
      <div class="details-description-container">
      </div>
      `;

  const detailsContainer = section.querySelector(
    ".details-description-container"
  );
  const addToCartButton = AddToCartButton(room);
  const details = Details([
    {
      image: BedImage(),
      text: room.beds,
      tooltipText: `There are ${room.beds} beds in the room`,
    },
    {
      image: PeopleImage(),
      text: room.guests,
      tooltipText: `Room can accomodate ${room.guests} guests`,
    },
    {
      image: PriceImage(),
      text: room.price.toFixed(2),
      tooltipText: `One night in a room costs ${room.price.toFixed(2)} PLN`,
    },
    {
      image: ReviewImage(),
      text: room.rating,
      tooltipText: `Rating from our guests ${room.rating}/5 stars`,
    },
  ]);
  detailsContainer.append(details);

  section.append(detailsContainer, addToCartButton);

  return section;
}
