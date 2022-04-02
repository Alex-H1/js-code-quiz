var startgame = document.getElementById("button");
var timerEl = document.getElementById("timer");
var headerEl = document.querySelector("header");
var answerEl = document.getElementById("anwers");
var secondsLeft= 5;
var timerid;

var questionSection = document.getElementById("question");
console.log(questionSection)
var listQuestions = [
    "question 1", 
    "question 2",
    "question 3",
]


function countdown(){
    if(secondsLeft<=5){
        secondsLeft --
        timerEl.textContent = secondsLeft;
    }if(secondsLeft<=0){
        console.log("worked")
    }
}



function showquestion(){
    var questionH = document.createElement("h1");
    console.log(questionH);
    questionH.textContent= listQuestions[0];
    console.log(questionH);
    questionSection.appendChild(questionH);
}



function showChoices(){
    listQuestions[0].array.forEach(item => {
    var li0 = document.createElement("li");
    li0.innerText =item;
    answerEl.appendChild(li0);
    console.log(answerEl);
    });
}



function startquiz(){
    headerEl.style.display="none";
    timerEl.textContent = secondsLeft;       
    timerid=setInterval(countdown, 1000)
    showquestion()
}

startgame.addEventListener("click",startquiz)