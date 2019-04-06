var start = document.querySelector(".startGame");
var showQuestion = document.querySelector(".question");
var firstChoice = document.getElementById("firstChoice");
var secondChoice = document.getElementById("secondChoice");
var thirdChoice = document.getElementById("thirdChoice");
var fourthChoice = document.getElementById("fourthChoice");
var timeWatch = document.getElementById("timer");
var solution = document.querySelector(".correct");
var correct = document.querySelector(".correctAnswer");
var endResults = document.getElementById("results");

var triviaAsk = ["Who is the main actor in the Taken Movie?", 
                 "How many Avengers are there?" ,
                  "Which of these is not an Avenger?", ""];

var count = 0;
var correctChoice = 0;
var incorrect = 0;
var watch = 30;
var intervalID;

var test;


start.addEventListener("click", displayQuestion);
solution.addEventListener("click", updateDisplay);


var triviaChoice = [{
                    choiceOne: [ 
                    "Liam Nesson",
                     "Tom Cruise", 
                    "Leonardo DiCaprio", 
                    "Jon Lynch"]
                    }, {
                    choiceTwo:["4", "3", "2", "5"]    
                    }, {
                    choiceThree: ["Hulk", "Simba", "Iron Man", "Captain Marvel"] 
                    }, {
                        choiceFour: []
                    }];


function displayQuestion() {   
    watch--;
    timeWatch.innerHTML = watch + " Seconds reamining";

    showQuestion.innerHTML = triviaAsk[count];
    
        firstChoice.innerHTML = triviaChoice[0].choiceOne[0];
        secondChoice.innerHTML = triviaChoice[0].choiceOne[1];
        thirdChoice.innerHTML = triviaChoice[0].choiceOne[2];
        fourthChoice.innerHTML = triviaChoice[0].choiceOne[3];

    if (watch === 0) {
        count++;
        firstChoice.innerHTML = triviaChoice[1].choiceTwo[0];
        showQuestion.innerHTML = triviaAsk[count];
        
        watch = 30;
    }

    if (count === 3) {
        showQuestion.style.display = 'none';
        firstChoice.style.display = 'none';
        secondChoice.style.display = 'none';
        thirdChoice.style.display = 'none';
        fourthChoice.style.display = 'none';
        count = 3;
        endResults.innerHTML = "Correct Answers: " + correctChoice + " Incorrect Answers: " + incorrect;
        watch = 100;
    }

    
    showQuestion.style.display = 'block';
    start.style.display = 'none';
    newQuestion = setInterval(nextQuestion, 30000);

    startClock();
}

function updateDisplay() {
    correct.style.display = 'block';
    showQuestion.style.display = 'none';
    count++;
    correctChoice++;

}

function nextQuestion() {
    setTimeout(displayQuestion, 30000);
    setTimeout(updateDisplay, 5000);
}

function startClock() {
    clearInterval(intervalID);
    intervalID = setInterval(displayQuestion, 1000);

}




