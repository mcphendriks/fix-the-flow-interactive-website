Fork deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in:  https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md

# Titel
Fix the flow interactive website, is een opdracht voor een klant genaamd "Buurtcampus". Bij Buurtcampus wordt op korte termijn een stekjesbieb neergezet. Buurtbewoners kunnen stekjes halen uit de stekjesbieb, maar ook stekjes brengen naar de stekjesbieb. De stekjesbieb dient als middel om buurtbewoners met elkaar te verbinden. Daarnaast leren bewoners hoe ze op een duurzame manier met planten kunnen omgaan en draagt het bij aan een gezondere leefomgeving in huis. Voor deze opdrachtgever heb ik een interactieve filtering gecodeerd. In dit proces kan de gebruiker filteren in de stekje om de moeilijkheidsgraad van het verzorgen van een plant te kunnen.

## User Story
Als Buurtbewoner van Amsterdam-Oost wil ik kunnen filteren in de stekjes om de moeilijkheidsgraad van het verzorgen van een plant te kunnen inzien. 

## Beschrijving

<img width="200" alt="Screenshot 2022-12-22 at 11 07 09" src="https://user-images.githubusercontent.com/106346778/209110497-6e16927e-3857-4115-9eea-759bd889a01c.png"><img width="400" alt="Screenshot 2022-12-22 at 11 05 09" src="https://user-images.githubusercontent.com/106346778/209110526-55b260fe-4aaa-4860-b4ec-d47e0d6c80d1.png"><img width="400" alt="Screenshot 2022-12-22 at 11 06 45" src="https://user-images.githubusercontent.com/106346778/209110516-4aef93be-1bc5-46b2-8fe4-ec64c86a15c2.png">

## Kenmerken
HTML Structuur (FILTER MENU) : 
```<!-- Aside menu select checkbox -->
      <aside class="filter-nav">
        <h1>Filter:</h1>
        <div class="filter-inner">
          <div class="select-btn">
            <span class="btn-text"
              ><i class="fa-regular fa-hand-holding-seedling"></i
              >Verzorging</span>
            <span class="arrow-dwn">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </div>
          <!-- checkbox easy -->
          <ul class="list-items">
            <li class="item">
                <input type="checkbox" class="easy-checkbox">
                <label for="easy-filter">Makkelijk</label>
              </li>
            <!-- checkbox hard -->
            <li class="item">
              <input type="checkbox" class="hard-checkbox">
              <label for="easy-filter">Moeilijk</label>
            </li>
          </ul>
      </aside>
```

HTML STRUCTUUR (FOR PLANT CARD)
```
<div class="card-plant easy">
        <img
          src="assets/customer-plants/Peperomia Raindrop VARIEGATA.png"
          class="card-plant-img"
          alt="plant image" />
        <div class="card-plant-overlay">
          <div class="card-plant-content">
            <h1 class="card-plant-title">Peperomia Raindrop</h1>
          
            <a href="/"
              ><button class="card-plant-btn" role="button">
                Plantje Ruilen
              </button></a
            >
          </div>
        </div>
      </div>
```
CSS: (Responsible for the display js checkbox selector click function)
```
.card-plant. {
  display: block;
}

.easy.active {
  display: none;
}

.hard.active {
  display: none;
}
```
JS: (Dropdown click button)
```
// Responsible for selecting an element from a document by using a CSS selector (Dropdown)

let selectBtn = document.querySelector('.select-btn');
items = document.querySelectorAll(".item");

// console.log(select-btn,items) delete after checking

// Responsible to attach an click (event handler) to an dropdown icon( element.) 
selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

```
JS: (Multi select checkboxes, to select plants ons care difficulty)
```
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
```



## Licentie
- [Wireframing User Flow with Wireflows](https://balsamiq.com/learn/articles/wireflows/)
- Tutorial  [if you only know one thing about JavaScript, this is what I would recommend](https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)
- [MDN QuerySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN ClassList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 
- [MDN addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Difference between var, let const](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [SVG ICONS ONLY](https://thenounproject.com/)
