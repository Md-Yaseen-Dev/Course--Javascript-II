// ---------------------object-----------------------


let person = {
    firstName: "Mohammad",
    "last Name": "Yaseen"

}
console.log(person.firstName);
// console.log(person.lastName); WE CANT USE.,,

// we can access other notation i.e by using square brackets

console.log(person["firstName"] + person["last Name"]);

// note:- YOu can use space between property it is valid but dont use . Use instead of -,_  between space. 

// dont use dot notation because for string it will get errors.


//  FOR MODIFY---

person.firstName = "shaik";

console.log(person);

//  we can delete the properties

delete person["last Name"];

console.log(person);

//  to check in true or false.
person.age = 23;
console.log("age" in person);

console.log(person);


// we dont know how many properties are there . to check all properties we say iterating of an object.

for (let key in person) {

    console.log(key + " : " +person[key] );

}
