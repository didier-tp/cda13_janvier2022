var x=5;
var y = eval ("3*x");
console.log("y=" +y ) //15

function afficherDateEtHeure(){
    console.log(new Date());
}

afficherDateEtHeure();
setTimeout(afficherDateEtHeure , 2000 /* ms */);

