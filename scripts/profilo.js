const Max = (a, b) => (a>b)?a:b;
$(document).ready(aggiorna);


function aggiorna(){
  let data = $("#data").text();
  let nascita = new Date(data);
  let now = new Date();
  var d = Math.abs(nascita - now) / 1000;
  let b = (now.getMonth()>nascita.getMonth() || (now.getMonth()==nascita.getMonth() && now.getDate()>nascita.getDate()))
  let c = (now.getDate()<nascita.getDate())
  let anni = b ? (now.getFullYear()-nascita.getFullYear()) : Max(0, now.getFullYear()-nascita.getFullYear()-1);
  let mesi = b ? (now.getMonth()-nascita.getMonth()) : (12+now.getMonth()-nascita.getMonth());
  let giorni = c ? now.getDate()-nascita.getDate()+ new Date(now.getFullYear(), now.getMonth(), 0).getDate(): now.getDate()-nascita.getDate();
  let ore = now.getHours();
  let minuti = now.getMinutes();
  let secondi = now.getSeconds();
  //console.log(r);
  let stringa = (anni!=0?(anni + (anni>1?" anni, ":" anno, ")):"")+ (mesi!=0?(mesi + (mesi>1?" mesi, ":" mese, ")):"") + (giorni!=0?(giorni + (giorni>1?" giorni, ":" giorno, ")):"") + (ore!=0?(ore + (ore>1?" ore, ":" ora, ")):"") + (minuti!=0?(minuti + (minuti>1?" minuti, ":" minuto, ")):"") + secondi + (secondi!=1?" secondi":" secondo");
  $("#eta").text(stringa);
  setTimeout(aggiorna, 1000);
}
