/**------------------random number-------------------- */


let x = Math.floor(Math.random() * 7);
console.log(x); // it wiil give random number between 0 to 6 ; Note:- we have to mulitply one more value to get last number i.e 6.
// -------------------or------------------------

let y = Math.floor(Math.random() * 7) + 1;
console.log(y); // it wiil give random number between 1 to 6. we have exclude 0 use +1 at last.


// -----------------get between 15-25--------------

let z = Math.floor(Math.random() * (25 - 15) + 15);
console.log(z); // it will start from 15 and it multiply by 10 and gives output between 15 to 24 .Note u can write directly 10 . in the place of(25-10)

// ----------------------another way of create random number----------

function getRandom(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
}
console.log(getRandom(40,50));