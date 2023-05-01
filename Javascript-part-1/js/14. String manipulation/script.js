let str = "Roshan"; // double quotation

let greet = `Hi ${str} !`; // template literals or backick string

console.log(greet);

// for space

let name = "Fazil \nwaheed"; // it will be print in new linw
console.log(name);

let string1 = "Mohammad \t fazil" // one tab space
console.log(string1)

let backslash = "  yes\/no";
console.log(backslash)

/*-------------------- string length ---------*/

let string = "mohammad Irshad";

console.log(string.length);

/* ---------------for particular letter---------*/
console.log(str[3]);


/*----------------concatenate--------------------*/

let str1 = "shaik";

console.log(str1 + " " + string);


/*--------------comparison withs string----*/

if (string == "mohammad Irshad") {
    console.log("Equal");
}
else {
    console.log("Not-Equal");

}
// note javascript is casesensitive if one of the letter  doesn't match it will return false.

//------------- concatenate using method *---------------*/

let newStr = "Yaseen";

let strconc = newStr.concat(" and ", string, " llare childhood friends");;

console.log(strconc);

/*------------------------substring----------------------*/

let sentence = " This is Javascript tutorial. it is a good tutorial.   ";

console.log(sentence.substr(8, 19));  // it will start from 8 and it will count 19 letters or returns that 19 letters word from starting from index

/*----------------------subString------------------ */

console.log(sentence.substring(8, 19)); // it will return between 8th index to 19th index.

/* -----------------indexof-------------------*/

console.log(sentence.indexOf("Javascript")); // we will pass the charactor or value and return that index number start position

/*---------------lastindexof---------------- */

console.log(sentence.lastIndexOf("is")) // it will search from last and get that index value.

//Note:if dont find that value . simply it will return -1;


/*---------------trim---------------- */
console.log(sentence);
console.log(sentence.trim());//this will help you to clear start and end position space.

/**-----------------trimstart-------- */

console.log(sentence);
console.log(sentence.trimStart());

/**-------------trimend------------ */


console.log(sentence);
console.log(sentence.trimEnd());

/** -----------------uppercase---------------- */

console.log(sentence);
console.log(sentence.toUpperCase());//convert all the letters to capital letters.

/**-------------------lowercase()---------- */

console.log(sentence.toLowerCase()); //convert all the letters to small letters

/**-------------------replace()-------------- */

console.log(sentence.replace('good','best'));// it will replace all good with best keyword.



/**-------------------includes()-------------- */
console.log(sentence.includes("Java")); // if word is found it will return true otherwise false.


