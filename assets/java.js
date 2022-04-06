var startgame = document.getElementById("button");
var timerEL = document.getElementById("timer");
var headerEl = document.querySelector("header");
var questionEl = document.getElementById("questionC");
var answersEl = document.getElementById("answers");
var questionDiv= document.getElementById("questions");
var title=document.getElementById("title")
var finishedEl = document.getElementById("finished");
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
    title.textContent = currentQuestion.questionT;
    questionEl.innerHTML="";

    currentQuestion.answers.forEach(function(answers,i){
        var questionList = document.createElement("button");
        // questionList.setAttribute("class","answers");
        questionList.setAttribute("value", answers);

        // creates and displays question choices  
        questionList.textContent=i +1+"one."+answers;
        questionEl.appendChild(questionList);

        questionList.addEventListener("click",questionEl);
    });
    console.log(questionEl);
};

function questionC(){
    if(this.value !== questions[currentI].point){
        secondsLeft -=30;

        if(time<0){
            time=0;
        }
    }
    // next question
    currentI++;

    if(currentI !== questions.length){
        nextQuestion();
    }else{
        done();
    }

};






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
