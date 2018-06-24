$("#firstbut").click(function() {
      var inputText = parseInt($("#num1").val());
      var inputText2 = parseInt($("#num2").val());
      var inputSum = inputText + inputText2;
      if (inputText == null || inputText == "") {
        alert(" Gimme Input");
      } else {
        $("#addval").text(inputSum);
    }
  });
$("#dropbtn").click(function(){
  var dropDownVal = $("#dropdown").val();
  $("#dropval").text(dropDownVal);
}
);

$("#checkage").click(function(){
  var age = $("#age").val();
  if(age <= 100){
    $("#ageoutput").text("Yay " + age + " is less than or equal to 100").css("color","green");
  }else {
    $("#ageoutput").text(age + "is greater than or equal to 100").css("color","red");
  }
});

$("#greeting").click(function()
{
  var name = $("#name").val();
  $("#fullgreeting").text("Hello " + name).css("display","none").slideDown(500);
});


$("#door").click(function(){
  var doorNum = $("#doornum").val();
  if (doorNum == 1) {
    $('#prizeimg').attr('src','https://vignette.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437');
    $('#wrongdoor').text("Whoa a person");
  } else if (doorNum == 2){
    $('#prizeimg').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0zHLcF9yev3LM5cT6--VqefchvHOX86ERdyZAJK79x7kh5iT');
    $('#wrongdoor').text("Yay a hampster");
  } else if (doorNum == 3){
    $('#prizeimg').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKu9Vt5CbVd39TfHtv9DV1WDVSgazSKrHIZIF_vDzQQo2Vs1JpMg');
    $('#wrongdoor').text("Yay a fish");
  }
    else {
    $('#prizeimg').attr('src','');
    $('#wrongdoor').text("Choose Door 1, 2, or 3");
    }
});
