var start = document.querySelector(".startGame");
var showQuestion = document.querySelector(".question");
var firstChoice = document.getElementById("firstChoice");
var secondChoice = document.getElementById("secondChoice");
var thirdChoice = document.getElementById("thirdChoice");
var fourthChoice = document.getElementById("fourthChoice");
var timeWatch = document.getElementById("timer");
var solution = document.querySelector(".correct");
var correct = document.querySelector(".correctAnswer");

var triviaAsk = ["Who is the main actor in the Taken Movie?", 
                 "How many Avengers are there?" ,
                  "Which of these is not an Avenger?"];

var count = 0;
var correctChoice = 1;
var incorrect = 1;
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

console.log(triviaChoice[0].choiceOne[3])

function nextQuestion() {
    setTimeout(displayQuestion, 30000);

}

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
        showQuestion.innerHTML = triviaAsk[count];
        
        watch = 30;
    }

    
    showQuestion.style.display = 'block';

    test = setInterval(nextQuestion, 30000);

    start.style.display = 'none';

    startClock();
}

function updateDisplay() {
    
    correct.style.display = 'block';
    correct++;
}

function startClock() {
    clearInterval(intervalID);
    intervalID = setInterval(displayQuestion, 1000);
}



