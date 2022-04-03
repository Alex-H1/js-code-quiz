var startgame = document.getElementById("button");
var timerEL = document.getElementById("timer");
var headerEl = document.querySelector("header");
var secondsLeft = 5;
var timerid;
var questionSection = document.getElementById("question");
var answersEl = document.getElementById("answers")
var nextQuestion = document.querySelectorAll("li")


console.log(questionSection)
var listQuestions = [
    "question 1", 
    "question 2",
    "question 3"
];

var questionAnswers = [
    'answersOne',
    'answersTwo',
    'answersThree'
];

questionAnswers[0]=[
    '1',
    '2',
    '3'
]   

function showAnswers(){ 
    questionAnswers[0].forEach(function(item){
    var li =document.createElement("li");
    var text =document.createTextNode(item);
    li.appendChild(text);
    answersEl.appendChild(li);
    })
};

function showquestion(){
    var questionH = document.createElement("h1")
    console.log(questionH)
    questionH.textContent= listQuestions[0];
    console.log(questionH)
    questionSection.appendChild(questionH);
};

function nextQuestion(){
    console.log(nextQuestion);
}

function countdown(){
    secondsLeft --
    timerEL.textContent = secondsLeft;
    if(secondsLeft<=0){
        clearInterval(timerid)
    }
};

function startquiz(){
    headerEl.style.display="none";
    timerEL.textContent = secondsLeft;       
    timerid=setInterval(countdown, 1000);
    showquestion();
    showAnswers();
};

startgame.addEventListener("click",startquiz)

questionAnswers.addEventListener("click",nextQuestion)
