
// JavaScript code to preload deck images
let deckImages = [];


// fetch the JSON data
fetch('decks.json')
  .then(response => response.json())
  .then(data => {

    // select the deck-select div
    let deckSelect = document.getElementById('deck-select');

    let deckInfo = document.getElementById('deck-info');

    // loop through the decks in the JSON data
    data.decks.forEach((deck, index) => {

      // create a new radio button
      let radioButton = document.createElement('input');
      radioButton.type = 'radio';
      radioButton.name = 'deck-select-radio'
      radioButton.value = deck.code;
      radioButton.classList.add('deck-select-radio');
      radioButton.classList.add('deck-set-' + deck.set);
      radioButton.dataset.color = deck.color; // add data-color for sorting
      radioButton.id = `deck${index+1}`;
      radioButton.addEventListener("change", () => {
        deckInfo.style = 'background-image: url("img/'+ deck.code + '.png")';
        deckInfo.innerHTML = `<h2>${deck.name}</h2>
                              <p>${deck.description}</p>
                              <input type="hidden" name="selected-deck" value="">
                              <button id="select-deck-button">Confirm Deck</button>`
      });

      // add sound effect on click
      radioButton.addEventListener('click', function() {
        selectSound.currentTime = 0; // reset the current time to the start
        selectSound.play();
      });

      // create a label for the radio button
      let label = document.createElement('label');
      label.htmlFor = radioButton.id;
      label.appendChild(document.createTextNode(deck.name));
      label.classList.add('deck');
      label.classList.add('deck-set-' + deck.set);
      // add image inside the label
      label.innerHTML =  '<img src="img/' + deck.code + '.png">';
      // add the radio button and label to the deck select
      deckSelect.appendChild(radioButton);
      deckSelect.appendChild(label);
      

      //PRELOAD IMAGES: create a new image object and set the source to the deck's image
      let img = new Image();
      img.src = deck.image;
      // add the image object to the deckImages array
      deckImages.push(img);
    });
  });


  let selectButton = document.getElementById("select-button");
  selectButton.addEventListener("click", function() {
    let selectedDeck = document.getElementById("deck-name").textContent;
    console.log(`Selected deck: ${selectedDeck}`);
    // Add code here to select the character
});