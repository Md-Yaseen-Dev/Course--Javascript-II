const book = ["Math", "Physics", "Bio", "computer-science"];

/**-----------------------push----------------------- */

book.push("hindi"); // it will add the element to the end of an array.
console.log(book);

/**-----------------------unshift----------------------- */

book.unshift("Telugu"); // it will add the element to the start of an array.
console.log(book);

/**-----------------------pop----------------------- */

book.pop(); // it will remove the element to the end of an array.
console.log(book);


/**-----------------------shift----------------------- */

book.shift(); // it will remove the element to the start of an array.
console.log(book);


/**-----------------------splice----------------------- */

book.splice(1, 1); // it will remove the element between the array . .first argument is an index . and second argument how many items we have to remove
console.log(book);

book.splice(1, 0, "social"); // it will add the element between the array . .first argument is an index . and second argument it will remove The Number of items.
console.log(book);


/**-----------------------length----------------------- */

// book.length = 0;  // to empty the array
// console.log(book);

/**-----------------------indexOf----------------------- */

let ind = book.indexOf("social");
console.log(ind); // it will return index of that value

/**-----------------------Array.isArray----------------------- */

let numbers = [1, 2, 3, 4, 5, 6, 7];

// let numbers = 1 ;

console.log(Array.isArray(numbers)); // it it is array it will return true otherwise false.


/**------------------------split---------------------------- */

let text = "This is a random text";

let wordArray = text.split('s'); // this string will convert to array. and remove s. 

console.log(wordArray)

/**--------------------join---------------------------------- */

console.log(book.join(" ")) // this array will convert to string


/**---------------------concat----------------------------- */


let book1 = ["science", "English"];

console.log(book.concat(book1)); // it will merge to arrays into one array.


/**-----------------multi-demionsional array--------------------- */

let bookwithpages = [["Math", "300"],
["social", "400"],
["Bio", "450"]
];

console.log(bookwithpages[0][1]);


/**-----------------for loop --------------------- */

for (i = 0; i < book.length; i++) {
    console.log(`Element ${i} is ${book[i]} \n`)
}

/**-----------------forEach----------------------- */

book.forEach(myfu);

function myfu(value, index) {
    console.log(index , value);
}
