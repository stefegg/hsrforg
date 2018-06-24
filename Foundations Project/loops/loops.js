//#1
for (var first = 0; first < 10; first++) {
  console.log('I love making pizza pies!');
}
//#2
for(var counter = 1; counter <= 100; counter++) {
  console.log(counter);
}
//#3
var fruit = ["Apples", "Oranges", "Pears", "Bananas", "Grapes"];
for(var k = 0; k < fruit.length; k++){
  console.log(fruit[k]);
}
//#3 Challenge - reverse order
var revFruit = [].concat(fruit).reverse();
for(var k = 0; k < 5; k++){
  console.log(revFruit[k]);
}
//#3 Bonus Challenge - display all
for(anything of fruit){
  console.log(anything);
}
//#4
var infinite = window.prompt('Guess the right word to exit the loop!');
while(infinite != 'NYCDA'){
  var infinite = window.prompt('Guess the right word to exit the loop!');
}
alert('You guessed it correctly!');
