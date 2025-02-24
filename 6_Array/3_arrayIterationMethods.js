//arrayIterationMethods


// forEach
myarray = [1,2,3,4,5,6]
let newArray=[];
myarray.forEach(element => {
    newArray.push(element*2);
});
console.log(newArray);

// map
const array1=[1,2,3,4,5]
const squares=array1.map(num=>num*num)
console.log("\nmap",squares);

// filter
const array2=[1,2,3,4,5,6,7,8,9]
const evens=array2.filter(num=>num%2==0)
console.log("\nfilter",evens);

// reduce
const array3=[1,2,3,4,5];
const sum=array3.reduce((a,b)=>a+b);
console.log("\nreduce",sum);

// find
const array4=[10,20,30,40,50,60];
const firstGreaterThan25=array4.find(num=>num>25);
console.log("\nfind",firstGreaterThan25);


// findIndex
const indexOfFirstGreaterThan25=array4.findIndex(num=>num>25);
console.log("\nfindIndex",indexOfFirstGreaterThan25);


// sort
const array5=[1,9,7,4,11,23,10];
console.log("\nsort",array5.sort((a,b)=>a-b));
