// WRITE YOUR CODE HERE
var student_name = ['Kris', 'Bob', 'Kelsey'];
console.log(student_name);
console.log(student_name.length);
console.log("Welcome to class " + student_name[0]);
console.log("Welcome to class " + student_name[1]);
console.log("Welcome to class " + student_name[2]);

student_name[0] = 'John';

if (student_name[0] == 'John') {
    console.log("Welcome to class " + student_name[0])
};