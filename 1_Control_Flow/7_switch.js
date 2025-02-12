// switch case
/*
    Used for executing different statements based on choices for an expression.
    syntax: switch (expression) {

            case value1:
                // code block to be executed
                // if expression matches value1
                break;

            case value2:
                // code block to be executed
                // if expression matches value2
                break;

            ...

            default:
                // code block to be executed
                // if expression doesn't match any case
        }
*/

console.log("c to create")
console.log("r to read")
console.log("u to update")
console.log("d to delete")
let message=""
const choice='c'

switch(choice){
    case 'c':
        message="User created successfully"
        break;    
    case 'r':
        message="Reading user's content"
        break;
    case 'u':
        message="User updated successfully"
        break;
    case 'd':
        message="User deleted successfully"
        break;
    default:
        message="Invalid Choice"
        break;
}

console.log(message);