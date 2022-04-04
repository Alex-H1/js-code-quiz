var startgame = document.getElementById("button");
var timerEL = document.getElementById("timer");
var headerEl = document.querySelector("header");
var secondsLeft = 5;
var timerid;
var questionSection = document.getElementById("question");
var answersEl = document.getElementById("answers")
var nextQuestion = document.querySelectorAll("li")


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
];

questionAnswers[1]=[
    'I',
    'Am',
    'the next array'
];

questionAnswers[2]=[
    '1',
    '2',
    '3'
];

function firstQuestion(){
    var questionH = document.createElement("h1")
    questionH.textContent= listQuestions[0];
    questionSection.appendChild(questionH);

    questionAnswers[0].forEach(function(item){
        var li =document.createElement("li");
        var text =document.createTextNode(item);
        li.appendChild(text);
        answersEl.appendChild(li);
    });
};

function secondQuestion(){
    var questiontwo = document.createElement("h1");
    questiontwo.textContent=listQuestions[1];
    questionSection.appendChild(questiontwo);
    
    questionAnswers[1].forEach(function(item){
        var liOne =document.createElement("li");
        var text =document.createTextNode(item);
        liOne.appendChild(text);
        answersEl.appendChild(liOne);
    });
};

function thirdQuestion(){
    var questionThree = document.createElement("h1");
    questionThree.textContent=listQuestions[2];
    questionSection.appendChild(questionThree);
    
    questionAnswers[2].forEach(function(item){
        var liTwo =document.createElement("li");
        var text =document.createTextNode(item);
        liTwo.appendChild(text);
        answersEl.appendChild(liTwo);
    });
};

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
    firstQuestion();
};

startgame.addEventListener("click",startquiz)

// questionAnswers.addEventListener("click",nextQuestion)
