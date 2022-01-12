var age=25; //ou bien 16
//afficher majeur si age >=18 ou bien mineur sinon

console.log( (age >= 18)?"majeur":"mineur");

var tab1 = [ 1 , 2 , 4  , 8 , 16];
delete tab1[2]; //supprime tab1[2] (remplace la valeur 4 par undefined)

//le mot clef let (possible depuis 2015) permet de déclarer une variable locale
//à la boucle
for(let i=0;i<tab1.length;i++){
    console.log("en position i=" + i + " tab1[i]=" + tab1[i]);
}

for(let j in tab1){
    console.log("en position j=" + j + " tab1[j]=" + tab1[j]);
}

//for(.. of ...) depuis 2015 seulement
for(let v of tab1){
    console.log("v=" + v);
}