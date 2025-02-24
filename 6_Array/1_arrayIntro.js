// Array
/*
Mutable datatypes that can hold more than one value.
Enclosed within square brackets []
Elements can be of heterogeneous data types
*/

// Creating an empty array
let myEmptyArray = []; 
let newArray = new Array()
console.log(myEmptyArray,newArray);


// Creating an array with elements
let myArray = [1, 2, 3, 4, 5];
let mixedArray = [1, 3.14, true, "Hello", [2, 3], new Set([6, 7]), { a: "apple", b: "banana"},new Map([['a',"apple"],['b',"ball"]])];

console.log(myArray[0]); //Positive Indexing
console.log(myArray.at(2));
console.log(myArray.at(-1)); //Negative Indexing