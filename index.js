let students = 0
let totalStudents = document.getElementById("students-count");
let saveEl = document.getElementById("save-txt");

function increment(){
    students += 1;
    totalStudents.innerHTML = students;
}

function save(){
    let studentStr = students + ' - '
    saveEl.textContent += studentStr 
    students = 0  
    totalStudents.innerHTML = students;
}