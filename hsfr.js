$("#pay-btn").click(function() {
var donation = $("#donate-amount").val();
if (donation == 1000000) {
$("#display-result").text("output 1");
} else if (donation == 100000){
$("#display-result").text("output 2").css("color", "red");
} else if (donation == 10000){
$("#display-result").text("output 3");
}
});
