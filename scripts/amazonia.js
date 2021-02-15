
$(document).ready(function (){
  $("#mode_switch").on("click", function () {
    console.log("nice");
    let theme = $("#theme").attr("href");
    if(theme == "styles/light-theme.css")
      $("#theme").prop("href", "styles/dark-theme.css");
    else
      $("#theme").prop("href", "styles/light-theme.css");
  });
});
