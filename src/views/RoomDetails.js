export function RoomDetails(room) {
  const section = document.createElement("section");
  section.innerHTML = `
      <h2>Room: ${room.name}<h2/>
      <br/>
      <h4>Beds 🛏️: ${room.beds}<h4/>
      <h4>Guests 🧑: ${room.guests}<h4/>
      <br/>
      <p>
          Cost: <strong>${room.price.toFixed(2)} PLN<strong/>
      <p/>
      `;
  return section;
}
