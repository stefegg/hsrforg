var numbers = [2, 19, 36, 45, 58, 73, 84, 95, 100];

for(var k = 0; k< numbers.length;  k++) {
  if(numbers[k] % 2 === 0 ) {
  console.log(numbers[k] + " is even");
  }
}
//without parameter/
var myObj = {
  name: "Stephen",
  age: 32,
  greeting: function() {
  console.log("My name is: " + myObj.name);
}
};

//with a parameter that is called //
var myObj = {
  name: "Stephen",
  age: 32,
  greeting: function(city) {
  console.log("My name is: " + myObj.name + " I live in " + city);
  }
};
// both of these won't work at once b/c of naming cross over //

//storing objects in an array//
var complexArr = [
  {
    name: "Stephen",
    age: 32
  },
  {
    name: "Sam",
    age: 95
  },
  {
    name: "Peter",
    age: 18
  }
]
complexArr[1] //how you'd get the 2nd person //
complexArr[1].name //how you'd get just the 2nd persons name//
//to get all the ages, make a loop //
for (var i=0; i<complexArr.length; i++) {
 console.log(complexArr[i].name)
}
//a loop to pull out just the names //
//put script for html at bottom of body
console.dir //how to see an HTML element as an object in console//
