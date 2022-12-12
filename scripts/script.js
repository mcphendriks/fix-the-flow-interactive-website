

// Responsible for the filter select checkbox

let selectBtn = document.querySelector('.select-btn');
items = document.querySelectorAll(".item");

// console.log(select-btn,items) delete after checking

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

// Responsible for the checkbox elements
const easyCheckbox = document.querySelector('.easy-care-checkbox');
const hardCheckbox = document.querySelector('.hard-care-checkbox');

// console.log(easyCheckbox)
// console.log(hardCheckbox)


// Responsible for the card elements 

const cardPlant = document.querySelectorAll('.card-plant');

// console.log(cardPlant)

// Listen for changes in the checkbox input elements






