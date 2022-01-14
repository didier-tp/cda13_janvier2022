let sListeVilles = 'Lyon,Paris,Marseille,Toulouse,Bordeaux'; // as string
let tabVilles = sListeVilles.split(",");
console.log("tabVilles="+tabVilles); //Lyon,Paris,Marseille,Toulouse,Bordeaux
console.log("tabVilles[0]="+tabVilles[0]); //Lyon

tabVilles.sort( (v1,v2) => v2.localeCompare(v1) ); //tri decroissant
console.log("apres tri décroissant , tabVilles="+tabVilles);
//apres tri décroissant , tabVilles=Toulouse,Paris,Marseille,Lyon,Bordeaux
if(tabVilles.includes("Lyon")) console.log("tabVilles comporte Lyon")

let adresse="rue_xyz 75001 Paris";
let tabPartiesDeAdresse = adresse.split(" ");
console.log("tabPartiesDeAdresse[0]="+tabPartiesDeAdresse[0]);
console.log("tabPartiesDeAdresse[1]="+tabPartiesDeAdresse[1])
console.log("tabPartiesDeAdresse[2]="+tabPartiesDeAdresse[2])

let adrAsString = tabPartiesDeAdresse.join("--");
console.log("adrAsString="+adrAsString);

var d1 = new Date();
console.log("d1="+d1);
//d1=Thu Jan 06 2022 17:37:33 GMT+0100 (heure normale d’Europe centrale)
var optionsA = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
var sDate1A = d1.toLocaleDateString("fr-FR", optionsA);
console.log("sDate1A="+sDate1A);// jeudi 06 janvier 2022
var optionsB = { year: "numeric", month: "2-digit", day: "2-digit"};
var sDate1B = d1.toLocaleDateString("fr-FR", optionsB);
console.log("sDate1B="+sDate1B);// 06/01/2022
var sDate1C = d1.toISOString();
console.log("sDate1C="+sDate1C);
// 2022-01-06T16:58:46.181Z (Z = Zero decalage vis a vis de UTC)
var sDate1D = d1.toISOString().split('T')[0];
console.log("sDate1D="+sDate1D);// 2022-01-06 (UTC)