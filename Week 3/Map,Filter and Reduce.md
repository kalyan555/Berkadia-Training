# Detailed Explaination of Map, Filter and Reduce
## Map
The map() method creates a new array with the results of calling a provided function on every element in the calling array.

    const numbers = [2, 4, 8, 10];
    const halves = numbers.map(x => x / 2);
    // halves is [1, 2, 4, 5]

## Filter
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
    const longWords = words.filter(word => word.length > 6);
    // longWords is ["exuberant", "destruction", "present"]

## Reduce
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
    
    const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
    // total is 7
