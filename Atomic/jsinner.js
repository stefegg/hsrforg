var arr = [{
    name: "Eric",
    role: "Teacher"
  },
  {
    name: "Tom",
    role: "Student"
  },
  {
    name: "Susie",
    role: "Student"
  },
  {
    name: "Rondom",
    role: "Useless"
  }

];

var output = document.querySelectorAll("#output");
// for (var i =0;i<arr.length;i++) {
//   output[0].innerHTML += "<li>The value is : " + arr[i].name + "</li>";

// }

var list = document.querySelectorAll("ul li");

// for (var i = 0; i < list.length; i++) {
//   list[i].style.color = "green";
// }

// for (el of arr)
for(var i = 0; i <arr.length; i++)
{
  output[0].innerHTML += "<li>Name : " + arr[i].name + ", Role: " + arr[i].role + "";
}
var num = 9;
var counterDiv = document.querySelector("#container");
for (var i = 0; i < num; i++) {
  counterDiv.innerHTML += "<p>The number is : " + i + "</p>"
}
