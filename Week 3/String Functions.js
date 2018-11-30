var name = "My name is kalyan reddy. Friends call me kalyan ";
var len = name.length;
var pos = name.indexOf("kalyan");
var poslast = name.lastIndexOf("kalyan");
var slicing = name.slice(7, 13);
var substrings = name.substring(7, 15);
var replacing = name.replace("Friends", "Buddies");
var upper = name.toUpperCase();
var lower = name.toLowerCase();
var extra = "I am training at Berkadia";
var concat = name.concat(" ", extra);
var trim= "       Hello World!        ";
var char=name.charAt(0);
var splitted=name.split(" ");
console.log("Name is :\t"+name)
console.log("Length : \t"+len);
console.log("Position of kalyan :\t "+pos);
console.log("last Position of kalyan : \t"+poslast);
console.log("slicing : \t"+slicing);
console.log("substring : \t"+substrings);
console.log("replacing friends with buddies :\t "+replacing);
console.log("upper case :\t "+upper);
console.log("lower case : \t"+lower);
console.log("concatinated :\t "+concat);
console.log("trimed : \t"+trim.trim());
console.log("splitted : \t"+splitted);

/*
Output
------
node stringfunctions.js
Name is :       My name is kalyan reddy. Friends call me kalyan
Length :        48
Position of kalyan :     11
last Position of kalyan :       41
slicing :        is ka
substring :      is kaly
replacing friends with buddies :         My name is kalyan reddy. Buddies call me kalyan
upper case :     MY NAME IS KALYAN REDDY. FRIENDS CALL ME KALYAN
lower case :    my name is kalyan reddy. friends call me kalyan
concatinated :   My name is kalyan reddy. Friends call me kalyan  I am training at Berkadia
trimed :        Hello World!
splitted :      My,name,is,kalyan,reddy.,Friends,call,me,kalyan,
*/
