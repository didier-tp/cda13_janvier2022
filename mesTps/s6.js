function Devise(code, nom, change){
    this.code = code;
    this.nom = nom;
    this.change = change;
    this.display = function(){
        console.log('[' + this.code + "] " 
                   + this.nom + " : " + this.change)
    }
}

var tabDevises = [];
tabDevises.push(new Devise("USD","Dollar",1.0));
tabDevises.push(new Devise("EUR","Euro",0.9));
tabDevises.push(new Devise("GBP","Livre",0.8));
tabDevises.push(new Devise("JPY","Yen",123.0));
for(i in tabDevises){
   tabDevises[i].display();
}