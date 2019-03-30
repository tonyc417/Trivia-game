var start = document.querySelector(".startGame");
var test = document.getElementById("firstQuestion");
var solution = document.querySelector(".correct");


start.addEventListener("click", displayQuestion);

function displayQuestion() {   
    test.style.display = 'block';
    start.style.display = 'none';
}

function updateDisplay() {
    
}
