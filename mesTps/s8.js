//complements du 12/01/2022
var p1 = { prenom : "Jean" , nom : "Bon" , age : 25 };
var p1AsJsonString = JSON.stringify(p1);
console.log("p1AsJsonString="+p1AsJsonString);

var cloneDeP1 = JSON.parse(p1AsJsonString);
console.log("age de cloneDeP1="+cloneDeP1.age);
cloneDeP1.age = 26;
console.log("age de cloneDeP1="+cloneDeP1.age);
console.log("age de ="+p1.age);

var p3 = { prenom : "axelle" , nom : "Aire" , age : 35 };
p3.firstname = p3.prenom;
console.log("p3="+JSON.stringify(p3));
delete p3.prenom;
console.log("p3="+JSON.stringify(p3));

//ajout dynamique de fonction nouvelle:
p3.incrementerAge = function (){
    this.age++;
}
//appel:
p3.incrementerAge();
console.log("p3="+JSON.stringify(p3));
