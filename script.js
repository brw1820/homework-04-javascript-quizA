// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```

// The following animation demonstrates the application functionality:


var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startButton = document.getElementById("startButton")
var timer = document.getElementById("remaining-time")
var jumbotron = document.getElementById("jumbotron")

var questionsArray =  [{
  question: "Commonly used data types DO NOT include",
  Answers: ["strings", "booleans", "strings", "alerts"],
  rightAnswer: 3,
},
{
  question: "The condition in an if/else statement is enclosed within:",
  firstAnswer: ["quotes", "curly brackets", "parentheses", "square brackets"],
  rightAnswer: 2,
}, {
  question: "Arrays in Javscript can be use to store:",
  firstAnswer: ["numbers and strings", "other arrays", "booleans", "all of the above"],
  rightAnswer: 4,
}, {
  question: "String values must be enclosed within ______ when being assigned to variables.",
  firstAnswer: ["commas", "curly brackets", "quotes", "parentheses"],
  rightAnswer: 3,
},  {
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  Answers: ["Javascript", "terminal/bash", "for loops", "console log"],
  rightAnswer: 4,
}]

var currentQuestionIndex = 0

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
setTime();
// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);
function displayQuestions() {
    
var currentQuestion = questionsArray[currentQuestionIndex];
jumbotron.textContent = "";
startButton.remove();
var hEl=document.createElement("h");


// document.getElementsById("quiz-screen").innerhtml="";
// document.getElementById("startButton").addEventListener("click", function(){})
}

function nextQ()    {

}

startButton.addEventListener("click", nextQ)
startButton.addEventListener("click", setTime)