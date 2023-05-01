//  Data type converison

/* ---------Data types--------
1. Numbers
2. strings
3. Boolean
4. undefined
5. null
6. Arrays 
7. functions
8. objects
9.Bigint
10. Symbol
*/

// ------Numbers---------

// let a = "true";
// alert(typeof a);

// let b = 1 ;

// alert(typeof b);

// Automatic converison or implict converison

let d = 5 + null;
console.log(d);
console.log(typeof d); // here num with + number value converted to number i.e null =0  so that 5 + 0 ; converting to number.

let e = "5" + null;
console.log(e);
console.log(typeof e); // + symbol with string used to convert into string

let f = "5" - null;
console.log(f);
console.log(typeof f);// - symbol with string used to convert to number

let g = "5" * "2";
console.log(g);
console.log(typeof g); // * symbol will convert to number. if the values are in number

let h = "1" * "No";

console.log(h);
console.log(typeof h); // * symbol the values of string is not in a number so it will get NaN.

/* Explict conversion...(or) Manual conversion  */

// convert to number to string

let num = 4;
console.log(typeof num);

let numTostr = String(num);
console.log(typeof numTostr);

// convert boolean to string

let bool = true;
console.log(typeof bool);

let boolToStr = String(bool);
console.log(typeof boolToStr);


// convert string to number ;

let str = "10";
console.log(str + "-" + typeof str);

let strTonum = Number(str);
console.log(typeof strTonum);

// convert boolean to number ;

let bool1 = true;
console.log(typeof bool1);

let bool1ToNum = Number(true);
console.log(bool1ToNum + " is converted to num and it type is - " + typeof bool1ToNum);

// convert Number and string to boolean

let str1 = "";
console.log(str1);

let str1Tobool = Boolean(str1);
console.log(str1Tobool + " and its type is" + typeof str1Tobool)

let num2 = 4 ;
 let num2Tobool = Boolean(num2);
 console.log(num2Tobool + " and its type is" + typeof num2Tobool )

//  Note :- in Boolean if the value is 0 . it will return false . if the value is more than 0 it will return true ; and in str if the value is empty it will return false because empty str is converted to number 0 . IF str have some value it is true. 