// arrayMethods

let myarray = ['a','b','c','d','e']

// unshift, push
myarray.unshift("Hello");
myarray.push("World");
console.log(myarray);

// shift, pop
myarray.shift();
myarray.pop();
console.log("\n",myarray);

// splice
myarray.splice(1,2);
console.log("\nsplice",myarray);


// concat
let array1=["apple","ball","cat"]
let array2=["dog","egg"]
const merge=array1.concat(array2);
console.log("\nconcat",merge);

// join
const joinedString=array1.join('-');
console.log("\njoin",joinedString);

// slice
const part=merge.slice(1,4);
console.log("\nslice",part);