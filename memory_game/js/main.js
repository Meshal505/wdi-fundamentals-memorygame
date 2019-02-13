console.log("Up and running!");






var cards = [ 
{
rank: "queen",
suit: "hearts",
cardImage:"images/queen-of-hearts.png" 
},

{
rank: "queen",	
suit: "diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"}

];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}

cardsInPlay.push(cards[0].rank);
cardsInPlay.push(cards[1].rank);



var flipCard = function() 

{ console.log("User flipped " + cards[0].rank)
console.log(cards[0].cardImage)
console.log(cards[0].suit)

console.log("User flipped " + cards[2].rank)
console.log(cards[2].cardImage)
console.log(cards[2].suit)



checkForMatch();

}

flipCard();


var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {
		var cardsElement = document.createElement('img');


	cardElement.setAttribute(cardElement , "images/back.png");
		
		cardElement.setAttribute([0]);
		

		document.addEventListener("click", flipCard);

		document.getElementById('game-board').appendChild(cardElement);

	    

		


}


}
createBoard();



















