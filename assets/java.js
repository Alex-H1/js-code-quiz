var startgame = document.getElementById("button");
var timerEL = document.getElementById("timer");
var headerEl = document.querySelector("header");
var questionEl = document.getElementById("questionC");
var answersEl = document.getElementById("answers");

// var secondsLeft = 5;
var timerid;
var currentQuestion=0;
// var choiceOne =document.getElementById("one");
// var choiceTwo = document.getElementById("two");
// var choiceThree = document.getElementById("three");

var questions =[
    {
        questionH:"what does !== mean",
        answers:["not equal to ","greater than or equal to","true"],
        point:"not equal to"
    },{
        questionH:"how can you delete content from .inner.HTML",
        answers:["var.style.display='none'","var=false","var=*nothing* "],
        point:"var=*nothing*"
    },{
        questionH:"how can you call this specific element <h1 id=headerOne>",
        answers:["querySelectAll","document.getElementById","document.getElementByClassName"],
        point:"document.getElementById"
    }
];
// global question variables
// var questionH;
// function firstQuestion(){
//     questionH = document.createElement("h1")
//     questionH.textContent= listQuestions[0];
//     questionSection.appendChild(questionH);

//     document.write(questionAnswers[0[0]]);

//     // questionAnswers[0].forEach(function(item){
//     //     var text =document.createTextNode(item);
//     //     choiceOne.appendChild(text);
//     //     answersEl.appendChild(choiceOne);
//     // });
// };


// var questionTwo;
// function secondQuestion(){
//     questionTwo = document.createElement("h1");
//     questionTwo.textContent=listQuestions[1];
//     questionSection.appendChild(questionTwo);
    
//     questionAnswers[1].forEach(function(item){
//         var liOne =document.createElement("li");
//         var text =document.createTextNode(item);
//         liOne.appendChild(text);
//         answersElUno.appendChild(liOne);
//     });

//     questionH.style.display="none";
//     answersEl.style.display="none";
// };


// var questionThree;
// function thirdQuestion(){
//     questionThree = document.createElement("h1");
//     questionThree.textContent=listQuestions[2];
//     questionSection.appendChild(questionThree);
    
//     questionAnswers[2].forEach(function(item){
//         var liTwo =document.createElement("li");
//         var text =document.createTextNode(item);
//         liTwo.appendChild(text);
//         answersElTwo.appendChild(liTwo);
//     });

//     questionTwo.style.display="none";
//     answersElUno.style.display="none";
// };

function rightAnswer(){
    console.log('we made it')
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
    timerEL.textContent = secondsLeft;       
    timerid=setInterval(countdown, 1000);
    // firstQuestion();
};

// starts quiz
startgame.addEventListener("click",startquiz);
// next questions


// pointOne.addEventListener("click",rightAnswer);