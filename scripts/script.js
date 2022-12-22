
// Responsible for selecting an element from a document by using a CSS selector

let selectBtn = document.querySelector('.select-btn');
items = document.querySelectorAll(".item");

// console.log(select-btn,items) delete after checking

// Responsible to attach an click (event handler) to an dropdown icon( element.) 
selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

// Responsible for the multi-select checkboxes, to select plants on care difficulty

// Responsible to select all elements with the class "card-plant"
var plantsCards = document.querySelectorAll(".card-plant") 
let easyCheckbox = document.querySelector('input.easy-checkbox')
let hardCheckbox = document.querySelector('input.hard-checkbox')

//  console for debugging purposes
console.log(plantsCards,easyCheckbox,hardCheckbox)

// Responsible for adding an event listener to the easyCheckbox element that listens for a "click" event. 
easyCheckbox.addEventListener("change", () => {
 plantsCards.forEach(plant => {  
    if(plant.classList.contains("easy")) {  // Responsible for looping through each element in the plantsCards node list. 
        plant.classList.toggle("active") // Responsible for checking if it has the class "easy". If it does, it toggles the "active" class on that element.
         }}) 
        })
         
hardCheckbox.addEventListener("change", () => { 
   plantsCards.forEach(plant => {   
    if(plant.classList.contains("hard")) {      
        plant.classList.toggle("active")   
      }}) 
    }) 



  
 



