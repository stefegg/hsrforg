$("button").click(function() {
      var inputText = $("input").val();
      // alert(inputText);
      if (inputText == null || inputText == "") {
        alert(" Gimme Input");
      } else {
        $("p").text("Hello " + inputText);
    }
  });
    // document.querySelectorAll("button");
    // this is a syntax for jquery
