var articles_raw = [];
var articles = [];
var cart_total = 0;

class Article{
  constructor(id, name, description, price){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  element(){
    return `<div id=\"`+this.id+`\"class=\"item\">
                <div class=\"itemframe\">
                  <h1>`+this.name+`</h1>
                  <img src=\"res/Articolo`+((typeof this.id !== 'undefined')?this.id:"")+`.jpeg\" alt=\"`+this.name+`\"> <br>
                  <button class=\"greenbutton desc\">Toggle description</button>
                  <p>`+this.description+`</p>
                </div>
                <h4>€`+this.price+`</h4>
                <button class=\"greenbutton cart\" type=\"button\" name=\"button\">Aggiungi al carrello</button>
               </div>\n\n`;
  }
}

$(document).ready(function() {$.ajax({
  type: "GET",
  url: "https://raw.githubusercontent.com/DavidePonzini/didattica/main/Hamburghers.json",
  success: function(data){
      articles_raw = (JSON.parse(data));
      articles_raw.forEach( (i, k) => {
        let article = new Article(((i.id)!==undefined)?i.id:k, i.name, i.description, i.price);
        articles.push(article);
        document.getElementById("grid").innerHTML+=(articles[k]).element();
        $(document).ready(function () {
          $("#"+k+" p").hide()
          $("#"+k+" .cart").on("click", function () { addtocart(k); });
          $("#"+k+" .desc").on("click", function () { $("#"+k+" p").toggle(); });
        });
      });
    }
})});

function addtocart(index){
  cart_total+=articles[index].price;
  document.getElementById("totale").innerHTML = "$"+String(Math.round((cart_total + Number.EPSILON) * 100) / 100);
}
