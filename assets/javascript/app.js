var start = document.querySelector(".startGame");
var showQuestion = document.querySelector(".question");
var choices = document.getElementById("choiceSelect");
var testing = document.getElementById("firstChoice");
var secondChoice = document.querySelector(".secondChoice");
var thirdChoice = document.querySelector(".thirdChoice");
var timeWatch = document.getElementById("timer");
var solution = document.querySelector(".correct");
var correct = document.querySelector(".correctAnswer");

var triviaAsk = ["Who is the main actor in the Taken Movie?", 
                 "How many Avengers are there?" ,
                  "Which of these is not an Avenger?"];

var triviaChoice = ["Liam Nesson"
                    , "Tom Cruise", 
                    "Leonardo DiCaprio", 
                    "Jon Lynch"];


var count = 0;

var watch = 30;
var intervalID;

var test;


start.addEventListener("click", displayQuestion);
// solution.addEventListener("click", updateDisplay);


function nextQuestion() {
    setTimeout(displayQuestion, 30000);

}

function displayQuestion() {   
    watch--;
    timeWatch.innerHTML = watch + " Seconds reamining";

    showQuestion.innerHTML = triviaAsk[count];
    
        testing.innerHTML = triviaChoice[0];
        // secondChoice.innerHTML = triviaChoice[i];
        choices.innerHTML = triviaChoice[3];

    if (watch === 0) {
        count++;
        showQuestion.innerHTML = triviaAsk[count];
        watch = 30;
    }
    showQuestion.style.display = 'block';

    test = setInterval(nextQuestion, 30000);

    choices.style.display = 'block';
    start.style.display = 'none';

    startClock();
}

// function updateDisplay() {
//     correct.style.display = 'block';
//     first.style.display = 'none';

// }

function startClock() {
    clearInterval(intervalID);
    intervalID = setInterval(displayQuestion, 1000);
}



