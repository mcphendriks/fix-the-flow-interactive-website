

// Responsible for selecting an element from a document by using a CSS selector

let selectBtn = document.querySelector('.select-btn');
items = document.querySelectorAll(".item");

console.log(select-btn,items) 

// Responsible to attach an click (event handler) to an dropdown icon( element.) 
selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

// Responsible for the multi-select checkboxes, to select plants on care difficulty

// Responsible to get the checkbox 
var plantsCards = document.querySelectorAll('.card-plant')
let easyCheckbox = document.querySelector('input.easy-checkbox')
let hardCheckbox = document.querySelector('input.hard-checkbox')








  
 



