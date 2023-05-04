let person = {
    firstName: "Mohammad",
    lastName: "Yaseen",
    sayHello() {
        console.log("hello ! I am "+ this.firstName + " and I have " + car.brand + " car");
    }
};
// we should use this for own object. and also it will work by using object. but it looks imformal. just like we can't say yaseen. tell me yaseen firstName, I'm right. we say tell me your name.

let car = {
    brand: "tata",
    model: "safari"
}
person.sayHello();