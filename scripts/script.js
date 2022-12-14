

// Responsible for selecting an element from a document by using a CSS selector

let selectBtn = document.querySelector('.select-btn');
items = document.querySelectorAll(".item");

// console.log(select-btn,items) delete after checking

// Responsible to attach an click (event handler) to an dropdown icon( element.) 
selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

// Responsible for selecting an classnames(elemen)t from a document by using a CSS selector
const easyCheckbox = document.querySelector('.easy-care-checkbox');
const hardCheckbox = document.querySelector('.hard-care-checkbox');

// console.log(easyCheckbox)
// console.log(hardCheckbox)


// Responsible for the card elements 

const cardPlant = document.querySelectorAll('.card-plant');

// console.log(cardPlant)

// Listen for changes in the checkbox input elements






