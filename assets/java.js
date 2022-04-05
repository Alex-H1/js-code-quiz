var startgame = document.getElementById("button");
var timerEL = document.getElementById("timer");
var headerEl = document.querySelector("header");
var secondsLeft = 5;
var timerid;
var questionSection = document.getElementById("question");
var answersEl = document.getElementById("answers");
var answersElUno = document.getElementById("answersone");
var answersElTwo = document.getElementById("answerstwo");


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

var clickQuestion;
// global question variables
var questionH;
function firstQuestion(){
    questionH = document.createElement("h1")
    questionH.textContent= listQuestions[0];
    questionSection.appendChild(questionH);

    questionAnswers[0].forEach(function(item){
        var li =document.createElement("li");
        var text =document.createTextNode(item);
        li.appendChild(text);
        answersEl.appendChild(li);
    });
};


var questionTwo;
function secondQuestion(){
    questionTwo = document.createElement("h1");
    questionTwo.textContent=listQuestions[1];
    questionSection.appendChild(questionTwo);
    
    questionAnswers[1].forEach(function(item){
        var liOne =document.createElement("li");
        var text =document.createTextNode(item);
        liOne.appendChild(text);
        answersElUno.appendChild(liOne);
    });

    questionH.style.display="none";
    answersEl.style.display="none";
};


var questionThree;
function thirdQuestion(){
    questionThree = document.createElement("h1");
    questionThree.textContent=listQuestions[2];
    questionSection.appendChild(questionThree);
    
    questionAnswers[2].forEach(function(item){
        var liTwo =document.createElement("li");
        var text =document.createTextNode(item);
        liTwo.appendChild(text);
        answersElTwo.appendChild(liTwo);
    });

    questionTwo.style.display="none";
    answersElUno.style.display="none";
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

startgame.addEventListener("click",startquiz);

answersEl.addEventListener("click",secondQuestion);

answersElUno.addEventListener("click",thirdQuestion);