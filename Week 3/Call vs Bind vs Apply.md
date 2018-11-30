// for call and bind
var person = {  
    hello: function(thing) {
      console.log("-called by  " + thing);
    }
  }

// for apply 
function personContainer() {
    var person = {  
       hello: function() {
         console.log( "-called by " + arguments[0]);
       }
    }
    person.hello.apply(person, arguments);
  }

//call attaches this into function and executes the function immediately:
person.hello.call( [],"call()");

//bind attaches this into function and it needs to be invoked separately like this:
var helloFunc = person.hello.bind();
helloFunc("bind()");

//apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time
personContainer("apply()");

/*
Output
------
node execute.js
-called by  call()
-called by  bind()
-called by apply()
*/
