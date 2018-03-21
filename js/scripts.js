$(document).ready(function() {
  $("#reservation").submit(function(event) {
    event.preventDefault();

    var name = ($("#inputname").val());
    var description = ($("#Description").val());
    var date = ($("#born").val());
    var result = name + " " + description + " " + date;

    console.log("test");

    $(".card-body").text(result);

  });
});
