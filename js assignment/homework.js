// question one //
var x = 2;
var y = 3;
var z = x + y;
console.log(x + y);
console.log(z);

var a = "Break";
var b = "it";
var c = "down";
var d = " ";
var e = a + d + b + d + c;
console.log(a + d + b + d + c);
console.log(e);
// question two //
var swArr = ["Luke", "Han", [" & ", "Chewie"]];
console.log(swArr[0], swArr[2][0], swArr[1]);
console.log(swArr[1], swArr[2][0], swArr[2][1]);
console.log(swArr[2][1], swArr[2][0], swArr[0]);
// question three //

var num1 = 101;

  if (100 > num1) {
  alert(num1 + " " + "is less than 100");
}
  else if (num1 > 100) {
  alert(num1 + " " + "is greater than 100");
}

// question four //

function myName (name) {
  console.log("The name entered into the console is" + " " + name);
}

myName("Stephen");

// question five //
function prizeDoor(door) {
  if (door == 1) {
    alert("Behind door #1 is a turkey")
  }
  if (door == 2) {
    alert("Behind door #2 is a rack of lamb")
  }
  if (door == 3) {
    alert("Behind door #3 is a cheese burger")
  }
  else if (door > 3){
    alert("that's not an option")
  }
}
prizeDoor(2)
