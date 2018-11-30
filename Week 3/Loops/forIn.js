(function(){
    var person = {fname:"John", lname:"Doe", age:25}; 
    var text = "";
    var x;
    for (x in person) {
        text += person[x] + " ";
    }
    console.log(text);
})();

/*
Output
-------
node forIn.js
John Doe 25
*/
