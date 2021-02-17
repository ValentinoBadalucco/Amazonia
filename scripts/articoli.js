var articles_raw = [];
var articles = [];
var mn=0, mx=0;
var cart_total = 0;


class Article{
  constructor(id, name, description, price, category){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }

  element(){
    return `<div id=\"`+this.id+`\"class=\"item\">
                <div class=\"itemframe\">
                  <h1>`+this.name+`</h1>
                  <img src=\"res/Articolo`+((typeof this.id !== 'undefined')?this.id:"")+`.png\" alt=\"`+this.name+`\"> <br>
                  <button class=\"descbutton desc\">Toggle description</button>
                  <p style="display:none;">`+this.description+`</p>
                </div>
                <h4>€`+this.price+`</h4>
                <button class=\"greenbutton cart\" type=\"button\" name=\"button\">Aggiungi al carrello</button> <br> <br> <hr>
               </div>\n\n`;
  }
}


$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/ValentinoBadalucco/varie/main/estintori.json",
    success: function(data){
      articles_raw = (JSON.parse(data));
      min=articles_raw[0];
      max=articles_raw[0];
      articles_raw.forEach( (i, k) => {
        let article = new Article(((i.id)!==undefined)?i.id:k, i.name, i.description, i.price, i.category);
        articles[((i.id)!==undefined)?i.id:k]=article;
        if(i.price>mx) mx = i.price;
        if(i.price<mn) mn = i.price;
      });
      $( function () {
          $("#range").slider({
            range: true,
            min: 0,
            max: 100,
            values: [0, 100],
            slide: function(event, ui) {
              $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            },
            stop: function(event, ui) {
              let optionSelected = $('#category').find(":selected").val();
              print_articles(ui.values[0], ui.values[1], optionSelected);
            }
          });

          $("#amount").val("$" + $("#range").slider("values", 0) + " - $" + $("#range").slider("values", 1));
      });
      $("#range").ready(function () {
        $("#range").slider("option", "min", mn);
        $("#range").slider("option", "max", mx);
      });
      print_articles(-1, -1, "tutto");
    } });
    $('#category').on('change', function () {
      let optionSelected = $('#category').find(":selected").val();
      print_articles($("#range").slider("option", "values")[0], $("#range").slider("option", "values")[1], optionSelected);
    });
});

function print_articles(lw, hg, ct){
  console.log([lw, hg, ct]);
  $("#grid").html("");
  articles.forEach( (i, k) => {
    if((i.price<=hg || hg==-1) && (i.price>=lw || lw==-1) && (i.category==ct || ct=="tutto")){
      $("#grid").append(i.element());
      $(document).ready(function () {
        $("#"+k+" .cart").on("click", function () { addtocart(k);});
        $("#"+k+" .desc").on("click", function () { $("#"+k+" p").toggle(); });
      });
    }
  });
}

function addtocart(index){
  cart_total+=articles[index].price;
  document.getElementById("totale").innerHTML = "$"+String(Math.round((cart_total + Number.EPSILON) * 100) / 100);
}
