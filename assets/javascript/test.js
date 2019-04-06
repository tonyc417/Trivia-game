var start = document.querySelector(".startGame");
var trivia = document.querySelector("h1");
var newQuestion = document.querySelector("#question");

start.addEventListener("click", updateDisplay);

var question = [ "Who is the main actor in the Taken Movie?", 
                 "How many Avengers are there?"];

var choices = ["Helo", " HI"];

var solution = ["Liam Nesson",
                 "4"];

function updateDisplay() {
    for (var i = 0; i < question.length; i++) { 
        trivia.innerHTML = question[i];  
}

}