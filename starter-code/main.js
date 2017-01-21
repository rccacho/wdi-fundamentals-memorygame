console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";

var cardTwo = "queen";

var cardThree = "king";

var cardFour = "king";

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