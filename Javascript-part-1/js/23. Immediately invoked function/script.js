// immediately invoked function expression

// IIFE is used to call immediately when function is wrote.


(function () {
    let string = "hey"
    console.log("hello world");
    console.log(string);
})();

// () --- this is invoked and gives output of the function expression.

//   we don't use again and again it is only for one time use. it will help computer to erase after writing one time.


// Note:- COmputer will use more ram when u define in global variable and less ram in local variable and anonymous function.


let msg = "hello script party";


function show(){
    console.log(msg);
}
show();