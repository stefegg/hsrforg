
//function declaration//
function myFirstNameAndLastNameGreeter(fullName, lastName)
//function body//
{

  if(fullName == "Stephen" && lastName == "Egbert") {
    console.log("Hello" + " " + fullName + " " + lastName);
  } else {
    alert("Who is this?");
  }
}

//function call //
myFirstNameAndLastNameGreeter("Stephen", "Egbert");
// if this call data is wrong, then you get the alert //

//loops//
for(var i = 0; i<10; i++){
  console.log("the current number is " + i);
}

var beers = ["Lagunitas", "Peak", "Ballast Point"];
for(var k = 0; k< beers.length; k++){
  console.log(beers[k] + " are tastey");
}

var beers = ["Lagunitas", "Peak", "Ballast Point"];
for(var k = 0; k< 2; k++){
  console.log(beers[k]);
}

for (anything of beers) {
  console.log(anything)}
