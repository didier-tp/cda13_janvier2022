var a = 3;
var b = 2;
var c = a+b ;
var s = "5";
//verifier si s == c et si s === c 
if(s == c) console.log("c == s");
if(s === c) console.log("c === s");
       else console.log("c et s ont valeurs ou types différents");

var ch = "a1";
if(isNaN(ch)) console.log("ch n'est pas un nombre");
ch = "12";  
if(isNaN(ch)) console.log("ch n'est pas un nombre"); 
           else  console.log("ch est  un nombre");   