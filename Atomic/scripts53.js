

//var listItems = document.querySelectorAll("ul li");

//for (var i = 0; i < listItems.length; i++) {
  //listItems[i].style.color = "green";
//}
//above is for list items already populated in HTML and fucking with them
//
var arr = ["one", "two", "three"];

var list = document.querySelector("ul");

for (var i = 0; i < arr.length; i++) {
  list.innerHTML += "<li>" + arr[i] + "</li>";
}
//without your <li> written in html already - this populates from the existing array //

var newArr = ["chocolate", "vanilla", "cookies n cream"];
var output = document.querySelector("#output");
for (var k = 0; k < newArr.length; k++) {
  output.innerHTML += "<p>my fav icecream: " + newArr[k] + "</p>";
}
