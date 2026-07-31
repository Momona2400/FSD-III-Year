const student = {
    name: "Ananya",
    age: 19,
    branch: "CSE"
}

const newStudent = {
    ...student,
    sec: "A"
}

console.log("new object name = ", newStudent.name);
console.log("new object age = ", newStudent.age);
console.log("new object branch = ", newStudent.branch);
console.log("new object sec = ", newStudent.sec);