
$(document).ready(function (){
  let theme = $("#theme").attr("href");
  if(theme == "styles/light-theme.css"){
    $("#mode_switch").prop("src", "res/dark-theme.png");
  }else{
    $("#mode_switch").prop("src", "res/light-theme.png");
  }

  $("#mode_switch").on("click", function () {
    console.log("nice");
    let theme = $("#theme").attr("href");
    if(theme == "styles/light-theme.css"){
      $("#theme").prop("href", "styles/dark-theme.css");
      $("#mode_switch").prop("src", "res/light-theme.png");
    }else{
      $("#theme").prop("href", "styles/light-theme.css");
      $("#mode_switch").prop("src", "res/dark-theme.png");
    }
  });
});
