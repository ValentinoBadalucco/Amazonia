var articoli = [];
var carrello = 0;

$(document).ready(function() {$.ajax({
  type: "GET",
  url: "https://raw.githubusercontent.com/DavidePonzini/didattica/main/Hamburghers.json",
  success: function(data){
      articoli = (JSON.parse(data));
      articoli.forEach( (i, k) => {
        let str = `<div class=\"item\">
                    <div class=\"itemframe\">
                      <h1>`+i.name+`</h1>
                      <img src=\"res/Articolo`+((typeof i.id !== 'undefined')?i.id:"1")+`.jpeg\" alt=\"`+i.name+`\">
                      <p>`+i.description+`</p>
  		              </div>
                    <h4>€`+i.price+`</h4>
                    <button class=\"greenbutton\" type=\"button\" name=\"button\" onclick=\"addtocart(`+k+`)\">Aggiungi al carrello</button>
                   </div>\n\n`;
        document.getElementById("grid").innerHTML+=str;
        console.log(i);
      });
    }
})});

function addtocart(index){
  carrello+=articoli[index].price;
  document.getElementById("totale").innerHTML = "$"+String(Math.round((carrello + Number.EPSILON) * 100) / 100);
}