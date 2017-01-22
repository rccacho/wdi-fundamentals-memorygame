console.log("JS file is connected to HTML! Woo!")

// var cardOne = "queen";

// var cardTwo = "queen";

// var cardThree = "king";

// var cardFour = "king";

// if (cardOne === cardTwo) {
// 	alert("You found a match!");
//   } else {
//   	alert("Sorry, try again.");
//   }

var gameboard = document.getElementById('game-board');

var createCards = function (num) {
  for (var i = 0; i < num; i++) {
    var createDiv = document.createElement('div');
    createDiv.className = 'card'; 
    document.getElementById('game-board').appendChild(createDiv);
  }
}
createCards(4)

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
  	cardElement.setAttribute('data-card', cards[i]);
  }
  for (var i = 0; i < cards.length; i++) {
  cardElement.addEventListener('click', isTwoCards);
    if ('data-card' == 'king') {
      cardElement.innerHTML = '<img src="heartsKingCard.png" alt="King of Hearts"/>';
  } else cardElement.innerHTML = '<img src="heartsQueenCard.png" alt="Queen of Hearts"/>';
}

var isMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
  } else alert("Please try again.");
}

var isTwoCards = function() {
  cardsInPlay.push(this.getAttibute('data-card'));
  if (cardsInPlay.length === 2) {
  	isMatch(cardsInPlay);
  	cardsInPlay = [];
  }
}



