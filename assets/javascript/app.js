var start = document.querySelector(".startGame");
var showQuestion = document.querySelector(".question");
var firstChoice = document.getElementById("firstChoice");
var secondChoice = document.getElementById("secondChoice");
var thirdChoice = document.getElementById("thirdChoice");
var fourthChoice = document.getElementById("fourthChoice");
var timeWatch = document.getElementById("timer");
var solution = document.querySelector(".correct");
var incorrectChoice = document.querySelector(".incorrect");
var wrongTwo = document.querySelector(".incorrectTwo");
var wrongThree = document.querySelector(".incorrectThree");
var wrongText = document.querySelector(".incorrectAnswer");
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
incorrectChoice.addEventListener("click", updateScore);
wrongTwo.addEventListener("click", updateScore);
wrongThree.addEventListener("click", updateScore);


var triviaChoice = [{
                    choiceOne: [ 
                    "Liam Nesson",
                     "Tom Cruise", 
                    "Leonardo DiCaprio", 
                    "Jon Lynch"]
                    }, {
                    choiceTwo:["4", "3", "2", "5"]    
                    }, {
                    choiceThree: ["Simba", "Hulk", "Iron Man", "Captain Marvel"] 
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

    if (count === 1) {
        firstChoice.innerHTML = triviaChoice[1].choiceTwo[0];
        secondChoice.innerHTML = triviaChoice[1].choiceTwo[1];
        thirdChoice.innerHTML = triviaChoice[1].choiceTwo[2];
        fourthChoice.innerHTML = triviaChoice[1].choiceTwo[3];
        correct.style.display = 'none';
        wrongText.style.display = 'none';
    } else if (count === 2) {
        firstChoice.innerHTML = triviaChoice[2].choiceThree[0];
        secondChoice.innerHTML = triviaChoice[2].choiceThree[1];
        thirdChoice.innerHTML = triviaChoice[2].choiceThree[2];
        fourthChoice.innerHTML = triviaChoice[2].choiceThree[3];
        correct.style.display = 'none';
        wrongText.style.display = 'none';
    } else if (count === 3) {
        endResults.innerHTML = "Correctly Answered: " + correctChoice + " Incorrectly Answered: " + incorrect;
        firstChoice.innerHTML = '';
        secondChoice.innerHTML = '';
        thirdChoice.innerHTML = '';
        fourthChoice.innerHTML = '';
        correct.style.display = 'none';
        wrongText.style.display = 'none';
        reset();
    }

    if (watch === 0) {
        count++;
        firstChoice.innerHTML = triviaChoice[1].choiceTwo[0];
        showQuestion.innerHTML = triviaAsk[count];
        
        watch = 30;
    }
    
    showQuestion.style.display = 'block';
    start.style.display = 'none';
    newQuestion = setInterval(nextQuestion, 30000);
    startClock();
}

function reset() {
    if (watch === 0 && count ===3) {
        count = 0;
        showQuestion.innerHTML = triviaAsk[count];

        firstChoice.innerHTML = triviaChoice[0].choiceOne[0];
        secondChoice.innerHTML = triviaChoice[0].choiceOne[1];
        thirdChoice.innerHTML = triviaChoice[0].choiceOne[2];
        fourthChoice.innerHTML = triviaChoice[0].choiceOne[3];
        correct.style.display = 'none';
        wrongText.style.display = 'none';
        endResults.innerHTML = '';
    }
}

function updateDisplay() {
    correct.style.display = 'block';
    count++;
    correctChoice++;
}

function updateScore() {
    wrongText.style.display = 'block';
    count++;
    incorrect++;
}

function nextQuestion() {
    setTimeout(displayQuestion, 30000);
}

function startClock() {
    clearInterval(intervalID);
    intervalID = setInterval(displayQuestion, 1000);

}




