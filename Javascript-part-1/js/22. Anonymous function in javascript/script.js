// Anonymous function = No name function

// function expression 
let show = function(){
    console.log("hello world");
}

// show();


/* setTimeout(functionName, Time);  */

setTimeout(show,1000)   // setting time for function.


setTimeout(function(){
    console.log("hey its working")},3000)  // anonymous function helps for one time use.