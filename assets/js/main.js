$(document).ready(function() {
  $("#button").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $("#nameSummary").text(name);
    $("#emailSummary").text(email);
    $("#messageSummary").text(message);

    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  });
});