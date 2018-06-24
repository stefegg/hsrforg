// #1
function multiplier (number) {
  return number * 25;
}
console.log(multiplier(99));



// #2
function fullName (firstName, lastName) {
  var combine = firstName + ' ' + lastName;
  return combine;
}
console.log(fullName('Stef', 'Egbert'));


// #3
function fullNameAndAge (firstName, lastName, age) {
  var result = fullName (firstName, lastName) + ', ' + age;
    return result;
  }

console.log(fullNameAndAge ('Jane', 'Doe', 23));
