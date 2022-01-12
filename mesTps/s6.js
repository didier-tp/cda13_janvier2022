function Devise(code, nom, change){
    this.code = code;
    this.nom = nom;
    this.change = change;
    this.display = function(){
        console.log('[' + this.code + "] " 
                   + this.nom + " : " + this.change)
    }
}

var d1 = new Devise("DKK" , "Couronne Danemark" , 7.7);
d1.couleur = "rouge";//possible mais pas conseillé

console.log("d1=" + d1); //[oject Object]
d1.display();
console.log("d1 as JSON string = " +  JSON.stringify(d1) );
console.log("code de d1=" + d1.code); //tout est par défaut public en javascript
console.log("code de d1=" + d1["code"]); //possible avec objet vu comme tableau associatif 


var tabDevises = [];
tabDevises.push(new Devise("USD","Dollar",1.0));
tabDevises.push(new Devise("EUR","Euro",0.9));
tabDevises.push(new Devise("GBP","Livre",0.8));
tabDevises.push(new Devise("JPY","Yen",123.0));
for(i in tabDevises){
   tabDevises[i].display();
}