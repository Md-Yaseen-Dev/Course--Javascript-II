// -------------------we have another predefined object [Date object]------------------------

// let x = "2022 - 05 - 04";  // for comparision it will be difficult.

// Months -==> 0 - 11 ;

/** there are seven parameters in the new Date */

/**1. year */
/**2. month*/
/**3. day */
/**4. hours */
/**5. minutes */
/**6. seconds */
/**7. milliseconds */


let x = new Date();  //---- it will get current time of ur computer......------.........

let y = new Date(2019); // minimum u have to Day-month-year


// console.log(y);


let z = new Date("october 14, 2001");

console.log(z.getFullYear());
// --------------------get date-----------------
// console.log(z.getTime());
// console.log(z.getMonth());
// console.log(z.getFullYear());
// console.log(z.getDay());
// console.log(z.getHours());
// console.log(z.getMinutes());
// console.log(z.getSeconds());

// ---------set date-----------------------
let k = new Date("october 14, 2021");


k.setFullYear(k.getFullYear() + 100);

console.log(k);

//-------------------- comparision--------------------
if (z < k) {
    console.log("z is past date")
} else if (z > k) {
    console.log("z is future date");
}else{
    console.log("z is same date");

}