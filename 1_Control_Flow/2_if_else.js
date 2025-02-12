// if_else_elseif
/*
    Execute a block of code only when certain criteria meet.
*/

//if
/*
    syntax: if(condition){ statement }
    if condtion is true, statement inside scope is executed. Otherwise skipped.
*/
let a=10
let b=10
if (a==b){
    console.log("a is equal to b")
}

//if else
/*
    syntax: if(condition){ statement }
            else{ statement }
    if condtion is true, statement inside scope is executed. Otherwise, code in else part is executed.
*/
if (a==b){
    console.log("a is equal to b")
}
else{
    console.log("a is not equal to b")
}

//if, else if, else
/*
    syntax: if(condition){ statement }
            else if(condition){ statement }
            else{ statement }
    if condtion is true, statement inside scope is executed. Otherwise, check another condition and executes if that condition is true. If not code in else part is executed.
*/
if(a===b){
    console.log("a is strongly equal to b")
}
else if(a==b){
    console.log("a is equal to b")
}
else{
    console.log("a is not equal to b")
}

//Example
console.log("\nExample");
let num=14;
if(num>0){
    console.log(num,"is positive number.");
}
else if(num<0){
    console.log(num,"is negative number.");
}
else{
    console.log("It is zero.");
}