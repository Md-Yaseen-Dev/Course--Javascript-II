var person = {
    name: "shaik mohammad yaseen",
    age: 24,

    getName: function () {
        return this.name.toUpperCase()
    }
};

console.log(person.getName());

// we have to access property but we doing for method.

/**-------------------getter and setter--------------------*/

var person = {
    name: "shaik mohammad Aaqib",
    age: 24,

    get getName() {
        return this.name.toUpperCase()
    }
};

// it will help in manipulate the data

console.log(person.getName);

// -------------------------set-------------------------------

var person1 = {
    name: "shaik roshan zameer",
    age: 22,

    set setname(n) {
        this.name = n.toUpperCase();
    }
}
person1.setname ="waheed";

console.log(person1)