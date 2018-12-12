/*
Output
------
babel sample.js
This will give the below result 

The file name is converted to result.js for convinence
*/
"use strict";

var odds = evens.map(function (v) {
    return v + 1;
});
var nums = evens.map(function (v, i) {
    return v + i;
});

