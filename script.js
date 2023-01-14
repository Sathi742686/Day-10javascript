// function getFormValue() {
//   const nameInput = document.getElementById("full-name");
//   const nameValue = nameInput.value;
//   const errorText = document.getElementById("error-text");
//   if (nameValue) {
//     console.log(nameValue);
//     errorText.innerHTML = "";
//     nameInput.value = "";
//   } else {
//     errorText.innerHTML =
//       '<p class="text-warning"> Please write your name </p>';
//   }
// }

// // addEventListener
// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", getFormValue);

// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function () {
//   const nameInput = document.getElementById("full-name");
//   const emailInput = document.getElementById("email-address");
//   const addressInput = document.getElementById("full-address");
//   const nameValue = nameInput.value;
//   const emailValue = emailInput.value;
//   const addressValue = addressInput.value;
//   const errorText = document.getElementById("error-text");
//   const formData = document.getElementById("form-data");

//   if (nameValue && emailValue && addressValue) {
//     formData.innerHTML = `<p>Form Submit By: ${nameValue} Email Address: ${emailValue}, Address: ${addressValue}</p>`;
//     errorText.innerHTML = "";
//     nameInput.value = "";
//     emailInput.value = "";
//     addressInput.value = "";
//   } else {
//     errorText.innerHTML =
//       '<p class="text-warning"> Please fill all input box! </p>';
//   }
// });

const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function () {
  const income = document.getElementById("income").innerText;
  const rentInput = document.getElementById("rent");
  const foodInput = document.getElementById("food");
  const utilitiesInput = document.getElementById("utilities");
  const insuranceInput = document.getElementById("insurance");
  const expensesDiv = document.getElementById("expenses");
  const balanceDiv = document.getElementById("balance");

  const incomeValu = parseFloat(income);
  const rentValue = parseFloat(rentInput.value);
  const foodValue = parseFloat(foodInput.value);
  const utilitiesValue = parseFloat(utilitiesInput.value);
  const insuranceValue = parseFloat(insuranceInput.value);

  if (
    rentValue >= 0 &&
    foodValue >= 0 &&
    utilitiesValue >= 0 &&
    insuranceValue >= 0
  ) {
    const cost = rentValue + foodValue + utilitiesValue + insuranceValue;
    const balance = incomeValu - cost;
    expensesDiv.innerText = cost;
    balanceDiv.innerText = balance;
  }
});
