var start = document.querySelector(".startGame");
var first = document.getElementById("firstQuestion");
var solution = document.querySelector(".correct");
var correct = document.querySelector(".correctAnswer");

// var solution = ["Liam Nesson", "4"];

start.addEventListener("click", displayQuestion);
solution.addEventListener("click", updateDisplay);

function displayQuestion() {   
    first.style.display = 'block';
    start.style.display = 'none';
}

function updateDisplay() {
    correct.style.display = 'block';
    first.style.display = 'none';

}

if (correct === )