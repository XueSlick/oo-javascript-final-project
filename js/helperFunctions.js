
/* Returns the largest number in {numberArray}*/
var max = function(numberArray) {
	return Math.max.apply(null, numberArray);
};

var min = function(numberArray) {
	return Math.min.apply(null, numberArray);
};

/* Returns a random number between {from} and {to}, inclusive.*/
var randomInt = function(from, to) {
	randomNumber = ( Math.random() * (to - from + 1) ) + from;
	return parseInt(randomNumber);
};