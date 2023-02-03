$(document).ready(function () {
  $("#search").click(function () {
    var checker = 0;
    for (var i = 0; i < 99; i++) {
      var card = $("div").filter(".product-wap")[i];
      var title = $("h4").filter(".card-title")[i].innerText.toUpperCase();

      if (title.indexOf($("#inp").val().toUpperCase()) > -1) {
        card.style.display = "block";
        checker++;
      } else {
        card.style.display = "none";
      }
    }
    if (checker > 0) {
      $("#not_find_any_thing").text("");
    } else {
      $("#not_find_any_thing").text("No Result Found").fadeIn();
    }
  });
});
