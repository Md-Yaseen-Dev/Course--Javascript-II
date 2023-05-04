var student1 = {
    firstName : "shaik",
    lastName : "Abdul Rahiman",
    age:59,
    class: 5 
}
console.log(student1);

var student2= {
    firstName : "shaik",
    lastName : "Mohammad Fazil",
    age:21,
    class: 3
}

//there are same properties for saving time we use constructor

function Teacher(firstName,lastName,age, cls){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.class = cls

}  // this is known as object constructor

var teacher = new Teacher("saleh","majeed","24", "12");

console.log(teacher)