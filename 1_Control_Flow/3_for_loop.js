// for_loop
/*
    Used for iterating over a fix number of time or elements over an iterable.
    syntax: for (initialExpression; condition; updateExpression) {
                for loop body
            }
*/

//for loop
console.log("\nfor loop")
for(let i=1; i<=5;i++){
    console.log(i)
}

//example
console.log("\nExample");
let a=[1,3,4,5,6]
let sum=0
for(let n=0;n<a.length;n++){
    sum +=a[n]
}
console.log("sum:",sum);