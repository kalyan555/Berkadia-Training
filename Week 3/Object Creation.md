#Creating a JavaScript Object
There are different ways to create new objects:

## 1. Define and create a single object, using an object literal.
This is the easiest way to create a JavaScript Object.

Using an object literal, you both define and create an object in one statement.

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

#### Example:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
## 2. Define and create a single object, with the keyword new.
We can create a object using the Object class constructor and new keywork and later access the elements.
#### Example
var person = new Object();

person.firstName = "John";

person.lastName = "Doe";

person.age = 50;

person.eyeColor = "blue";
## 3. Using functions as class:

One of the easiest way to instantiate an object in JavaScript. We define a classical JavaScript function and create an object of the function using new keyword. The properties and methods of function are created using the this keyword.

#### Example:

function copyClass(name, age) { 

    this.name = name;
    
    this.age = age; 
    
    this.printInfo = function(){ 
    
        console.log(this.name);
        
        console.log(this.age); 
        
    } 
    
} 

var obj = new copyClass("Vineet", 20);

obj.printInfo();
