function Student(first, last, age, child) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.child = child;
}
Student.prototype.nationality = "Indian";


var teacher1 = new Student("ms", "Dhoni", 25, 5);

var teacher2 = new Student("Virat", "Kholi", 24, 5);

teacher1.school = "sku";


Student.prototype.name = function () {
    return this.first + " " + this.last
}
console.log(teacher1); 