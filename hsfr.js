$("#pay-btn").click(function(){
var donation = $("#donate-amount").val();
if (donation == 1000000) {
$("#display-result").text("output 1");
} else if (donation == 100000){
$("#display-result").text("Getting warmer... but did you really think this was enough?").css("color", "red");
} else if (donation == 10000){
$("#display-result").text("That's very cute, but please select a real amount");
} else {
$("#display-result").text("Please select an amount.");
}
});
