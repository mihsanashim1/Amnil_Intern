//break
/*
    Used for terminating a loop.
    syntax: break
*/

for(let i=1;i<20;i++){
    console.log(i)
    if(i==5){
        break;
    }
}

//Example
console.log("\nExample");
let a=123
let sum=0
while(true){
    sum+=a%10;
    a=(a-a%10)/10;
    if(a==0){
        break;
    }
}
console.log("sum:",sum);