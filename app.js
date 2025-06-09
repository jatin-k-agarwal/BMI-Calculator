const form = document.querySelector("form");
document.getElementById("refreshBtn").addEventListener("click", function () {
  document.querySelector("form").reset();
  document.getElementById("results").innerHTML = "";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#Height").value);
  const weight = parseInt(document.querySelector("#Weight").value);
  const result = document.querySelector("#results");

  if (!height || height <= 0 || isNaN(height)) {
    result.innerHTML = " Please give a valid height.";
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    result.innerHTML = " Please give a valid weight.";
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    let category = "";
    if (BMI < 18.6) {
      category = "Under Weight";
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      category = "Normal Range";
    } else {
      category = "Over Weight";
    }

    result.innerHTML = `
     <p>Height: ${height} cm</p>
      <p>Weight: ${weight} kg</p>
      <p><strong>BMI: ${BMI}</strong></p>
      <p><strong>Category: ${category}</strong></p>`;
  }
});
