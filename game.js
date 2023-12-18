// Iteration 2: Generate 2 random number and display it on the screen
let boxs=document.getElementById("numbers");
let box1=document.getElementById("number1");
let box2=document.getElementById("number2");
let button=document.querySelectorAll(".button")
let greater=document.getElementById("greater-than");
let lesser=document.getElementById("lesser-than");
let equal=document.getElementById("equal-to");
let timer=document.getElementById("timer");

// Iteration 3: Make the options button functional

for(let i=0;i<3;i++){
    button[i].addEventListener("click",newNumber);
}
var sec=5;
function newNumber(){
    box1.innerHTML=Math.floor(Math.random()*100);
    box2.innerHTML=Math.floor(Math.random()*100);
}

// score

let score=0
function greaterFun(){
    if(box1.innerHTML > box2.innerHTML){
        score+=1
        resetTime(timerId)
    }
    else{
        window.location.href='gameover.html' 
    }
}
function lesserFun(){
    if(box1.innerHTML < box2.innerHTML){
        score+=1
        resetTime(timerId)
    }
    else{
        window.location.href='gameover.html' 
    }
}
function equalFun(){
    if(box1.innerHTML = box2.innerHTML){
        score+=1
        resetTime(timerId)
    }
    else{
        window.location.href='gameover.html' 
    }
}


// Iteration 4: Build a timer for the game
let timerId;
function startTimer(){
    sec = 20;
    timer.innerText=sec;
    timerId=setInterval(()=>{
        sec--;
        if(sec == 0){
            location.href="./gameover.html";
           
        }
    timer.innerText = sec;
    localStorage.setItem("gameScore",score);
    console.log(score)
    },1000)
}

startTimer();


function resetTime(timerId){
    clearInterval(timerId)
    startTimer();
}