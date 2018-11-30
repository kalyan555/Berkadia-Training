# JavaScript Closures
JavaScript variables can belong to the local or global scope.

Global variables can be made local (private) with closures.

    // Initiate counter
    var counter = 0;
    // Function to increment counter
    function add() {
    counter += 1;
    }
    // Calling add() 3 times
    add();
    add();
    add();
    // The counter will now be 3
    
With help closures we can make the scopes local and thus value will be assigned every time it is created.

    // Initiate counter
    var counter = 0;
    // Function to increment counter
    function add() {
        var counter = 0; 
        counter += 1;
    }
    // Calling add() 3 times
    add();
    add();
    add();
    // The counter will now be 0
