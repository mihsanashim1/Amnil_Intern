//while loop
/*
    Used for iterating over a uncertain number of time till the condition is fulfilled.
    syntax: while (condition) {
                body of loop
            }
*/
console.log("While")
let i=1
while(i<=10){
    console.log(i)
    i++
}

//Example
console.log("\nExample");
let a=123
let sum=0
while(a!=0){
    sum+=a%10;
    a=(a-a%10)/10;
}
console.log("sum:",sum);