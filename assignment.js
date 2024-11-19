let numberOne = 8
let numberTwo = 2
let answer = 
document.getElementById("num-one").textContent = numberOne
document.getElementById("num-two").textContent = numberTwo

function add(){
    answer = numberOne+numberTwo
    document.getElementById("sum-3").innerHTML="SUM: " + answer
}

function subtract(){
    answer = numberOne-numberTwo
    document.getElementById("sum-3").innerHTML="SUM: " + answer
}

function divide(){
    answer = numberOne/numberTwo
    document.getElementById("sum-3").innerHTML="SUM: " + answer
}

function multiply(){
    answer = numberOne*numberTwo
    document.getElementById("sum-3").innerHTML ="SUM: " + answer
}

multiply()

console.log(20000*3600*365)
console.log(90000*3600)