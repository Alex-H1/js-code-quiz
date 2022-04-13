var startgame = document.getElementById("button");
var timerEL = document.getElementById("timer");
var headerEl = document.querySelector("header");
var questionEl = document.getElementById("questionC");
var answersEl = document.getElementById("answers");
var questionDiv= document.getElementById("questions");
var title=document.getElementById("startScreen");
var Qtitle = document.getElementById("title");
var finishedEl = document.getElementById("finished");
var scoreEl = document.getElementById("score");
var finalScoreEl = document.getElementById("finalScore");
var wrongEl = document.getElementById("wrong");
var initiailsEl = document.getElementById("initials");
var enterEl = document.getElementById("enter");
var secondsLeft = 30;
var timerid;
var currentI=0;

var questions =[
    {
        questionT:"what does !== mean",
        answers:["not equal to ","greater than or equal to","true"],
        point:"not equal to"
    },{
        questionT:"how can you delete content from .inner.HTML",
        answers:["var.style.display='none'","var=false","var=*nothing* "],
        point:"var=*nothing*"
    },{
        questionT:"how can you call this specific element <h1 id=headerOne>",
        answers:["querySelectAll","document.getElementById","document.getElementByClassName"],
        point:"document.getElementById"
    }
];

function nextQuestion(){
    // question title 
    var currentQuestion= questions[currentI];
    Qtitle.textContent = currentQuestion.questionT;
    questionEl.innerHTML="";

    currentQuestion.answers.forEach(function(answer,i){
        var questionList = document.createElement("button");
        questionList.setAttribute("class","answers");
        questionList.setAttribute("value", answer);

        // creates and displays question choices  
        questionList.textContent= answer;
        questionEl.appendChild(questionList);
        
        questionList.addEventListener("click",questionC);
    });
};

function questionC(){
    if(this.value !== questions[currentI].point){
        secondsLeft -=5;
        wrongEl.removeAttribute("class");
        setTimeout(function(){
            wrongEl.setAttribute("class","hideWrong");
        },500);
    }
    
    // next question
    currentI++;

    if(currentI === questions.length){
        done();
    }else{
        nextQuestion();
    }

};
    // show results
function done(){
    questionDiv.setAttribute("class","none")
    clearInterval(timerid);
    finishedEl.removeAttribute("class");
    finalScoreEl.textContent = secondsLeft;
};

function score(){
    var initials =initiailsEl.value.trim();

    if(initials !==""){
        var newScore =JSON.parse(window.localStorage.getItem("newScore")) || [];

        var updatedScore={
            uScore: secondsLeft,
            initials: initials
        };
        newScore.push(updatedScore);
        window.localStorage.setItem("newScore",JSON.stringify(newScore));
    }
}

// starts timer
function countdown(){
    secondsLeft --
    timerEL.textContent = secondsLeft;
    if(secondsLeft<=0){
        clearInterval(timerid)
    }
};

function startquiz(){
    headerEl.style.display="none";
    questionDiv.removeAttribute("class");
    timerEL.textContent = secondsLeft;       
    timerid=setInterval(countdown, 1000);
    nextQuestion();
};

// starts quiz
startgame.addEventListener("click",startquiz);
enterEl.addEventListener("click",score)
