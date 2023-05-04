
let person = {
    firstName: "Mohammad",
    "last Name": "Yaseen",
    //third method used in obj

    sayhey: function () {
        console.log("hey")
    },
    // fourth method  ---- es6 

    sayho() {
        console.log("ho");
    }

}

person.age = 20;

// first method
person.sayhello = function () {
    console.log("hello")
}

person.sayhello();

console.log(person);


// second method

function greet() {
    console.log("hi");
}

person.sayhi = greet;

person.sayhi();

console.log(person);




