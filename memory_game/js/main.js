console.log("Up and running!");





//console.log( "User Flipped " + cardTwo);

var cards = [ "Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}

cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[1]);



var flipCard = function() 

{ console.log("User flipped " + cards[0])
console.log("User flipped " + cards[2])


checkForMatch();





}

flipCard();
















