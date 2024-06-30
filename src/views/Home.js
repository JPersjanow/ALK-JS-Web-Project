import { Detail } from "../details/Detail";
import { ReadMoreButton } from "../navigation/ReadMoreButton";
import { TreatmentList } from "./TreatmentList";
import { RoomList } from "./RoomList";
import treatmentsImg from "../assets/images/treatmentsImg.jpg";
import hotelImage from "../assets/images/hotelImg.jpeg";
import { ReviewImage } from "../assets/icons/ReviewImage";
import { TimeImage } from "../assets/icons/TimeImage";

export function Home() {
  const section = document.createElement("div");
  section.classList.add("container");

  section.innerHTML = `
            <div class="section">
            <div class="introduction">
              <img class="logo" src="logo.svg" alt="SPA logo"/>
              <h2>Sanus Per Aquam</h2>
              <h3>where technology meets relaxation</h3>
              <img class="arrow" src="arrow.svg">
            </div>
            </div>
            <div class="section">
              <div class="choice">
                <div class="column">
                <img src="${treatmentsImg}" alt="SPA image showing realxed women in a bathub"/>
                <h3>Indulge yourself</h3>
                <p>From massages to bubble baths, feel relaxation coming onto you! </p>
                </div>
                <div class="column">
                <img src="${hotelImage}" alt="Image of a beatiful resort"/>
                <h3>Take a rest</h3>
                <p>Our resort facility awaits, choose dates, book a room and up you go.</p>
                </div>
              </div>
            </div>
        </div>

    `;

  const readMoreTreatments = ReadMoreButton(TreatmentList, "Choose Treatment");
  const readMoreRooms = ReadMoreButton(RoomList, "Book a Room");
  section.querySelectorAll(".column")[0].append(readMoreTreatments);
  section.querySelectorAll(".column")[1].append(readMoreRooms);

  const reviewsSection = document.createElement("div");
  reviewsSection.classList.add("section");
  const reviewsContainer = document.createElement("div");
  reviewsContainer.classList.add("reviews");
  const reviewsDetail = Detail(
    ReviewImage(),
    "Best rated resort in the imaginary country!",
    "According to us",
    true
  );
  const timeDetail = Detail(
    TimeImage(),
    "It takes only 2 minutes to book a trip",
    "If the site works correctly",
    true
  );
  reviewsContainer.append(reviewsDetail, timeDetail);
  reviewsSection.append(reviewsContainer);
  section.append(reviewsSection);

  return section;
}
