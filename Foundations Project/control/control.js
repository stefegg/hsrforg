// #1

var answer = prompt('What is your name?');
if (answer == "Abraham Lincoln"){
  alert("Four score and seven years ago!");
}
//#2
var solution = prompt('Please enter a number greater than 22');
if (solution > 22){
  alert("The number is greater than 22");
}

//#3
var findout = prompt('Please enther a number that is greater than 100, but less than 2000');
if (2000 > findout && findout > 100) {
  alert("You are amazingly correct!");
}
else {
  alert("Awww, it it looks that number is not correct…. Try again!");
}

//#4
var multi = prompt('Please enter a number between 1 and 5');
if (multi == 1 || multi == 2){
  alert("You have just won a car!");
}
else
if (multi == 3 || multi == 4){
  alert("You have just won a gallon of milk!");
}
else
  if (multi == 5) {
    alert("Awww, sorry... it seems like you didn't choose the right number... No Worries! Try again!");
  }
