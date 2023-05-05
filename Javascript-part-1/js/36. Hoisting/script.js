// --------------------hoisting-----------------

// hoisting - to lift or pull 

hello(); // because it is hoisting

function hello() {
    console.log("hello world");
}


/** ------------------hoisting using variable----------- */

var x; // variable declared;
console.log(x);

x = 7;  // assignment [assign a value to variable];
console.log(x);

// decalre and assign is known as intialzation

var y = 20;
console.log(y)

// ----------how it is working-----------------------

console.log(z);// output: - undefined --- because the var function automatically  moves top of the line i.e known as hoisting

// Note :- hoisting only do for declaration
var z;

z = 34;

// ------------------Doesn't work using Let--------------------

// console.log(x1);  // reference error . because it is declared but it doesn't intalize by own so that why we get intalize error
// let x1;


// x1 = 3;


// ---------------strict mode-----------------------

x2 = 4;
console.log(x2); // output :- 4  -- if we forgor to declare too. it works, because automatically javascript declare variable by own.

// so that why we use keyword use strict-------------------
"use strict";   // why it will work only when i put top of the code.

xree= 3;
console.log(xree); // -- why ? not get error
