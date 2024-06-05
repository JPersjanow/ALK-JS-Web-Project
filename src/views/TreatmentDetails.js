export function TreatmentDetails(treatment) {
  const section = document.createElement("section");
  section.innerHTML = `
      <h2>Treatment: ${treatment.name}<h2/>
      <br/>
      <h4>Area 💪: ${treatment.area}<h4/>
      <h4>Time ⏲️: ${treatment.time}<h4/>
      <br/>
      <p>
          Cost: <strong>${treatment.price.toFixed(2)} PLN<strong/>
      <p/>
      `;
  return section;
}
