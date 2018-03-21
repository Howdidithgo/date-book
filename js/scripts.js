$(document).ready(function() {
  $("#reservation").submit(function(event) {
    event.preventDefault();
    console.log("test");

    var name = ($("#inputname").val());
    var description = ($("#Description").val());
    var date = parseInt($("#born").val());
    var result = name + " " + description + " " + date;


    $(".card-body").text(result);

  });
});
