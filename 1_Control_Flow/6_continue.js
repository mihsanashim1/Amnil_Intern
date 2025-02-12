//continue
/*
    Used for skipping iteration a loop.
    syntax: continue
*/

for(let i=1;i<=20;i++){
    if(i%5==0){
        continue;
    }
    console.log(i)
}

// Example
// adding first and last digit
console.log("\nExample"); // Concatenate 1st and last alphabet
let a="Hello World"
let sum=''
console.log(a.length);
console.log(a[0]);

for(let i=0;i<a.length;i++){
    if(i!=0 && i!=a.length-1){
        continue;
    }
    sum+=a[i]
}
console.log("Concateated:",sum);