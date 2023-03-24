//2.4.1 Intro to Arrays

//create
let students =['Adam', 'Brad', 'Casey', 'David'];
let value =[1, 2, 3, 4];

//accessing items in an array
console.log(students);
console.log(students[0]); //beginning items has index 0
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]); //error, as there is no 5th person

//formation item in array
console.log('student: '+ students[0]);
console.log(`student 2: ${students[1]}`);

//changing an item
students[1] = 'Stephanie';
console.log(students);

//push add to the end
students.push('Eve');
console.log(students);
students.push('Fred', 'Georgia');
console.log(students);

//pop removes the last item
students.pop();
console.log(students);

//shift removes the beginning item
students.shift();
console.log(students);+

//unshift adds an item to the beginning
students.unshift( 'zeke');
console.log(students);
students.unshift( 'Yvonne' , 'Xavier');
console.log(students);
//length of array = # items in it
numStudents = students.length;
console.log(students);

//how to access the LAST item
let lastStudent = students[students.length - 1];
console.log(lastStudent);

//slice up a piece of original array
let fruits =['apple', 'banana', 'orange', 'lemon', 'grape'];
let citrus = fruits.slice(2,4);
//1st number (2) is the starting index. Include it.
//2nd number (4) is the stop BEFORE index. Exclude it.
console.log(citrus);