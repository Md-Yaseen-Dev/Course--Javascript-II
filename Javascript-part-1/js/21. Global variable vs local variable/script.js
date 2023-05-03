// Global variable vs local variable
let car  = "audi";
function add() {
    let result = 33; //local variable. if a variable declare inside the function or blocked scope is known as local variable.
    console.log(result);
    console.log(car); //Global variable. it is accessible inside the scope. so it is called as global scope
}
add();
console.log(result); // -- it doesn't work because it is outside the block . this known as local variable.

console.log(car); // it is working here also so that it is global variable.


// note:- advantage of local variable is we can use same type of variable different functions
