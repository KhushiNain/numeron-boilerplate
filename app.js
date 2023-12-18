// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.


var playBtn =document.getElementById('play-button');
// method number 1

// playBtn.onclick=function(){ window.location.href='game.html'}

// method Number 2

// playBtn.addEventListener("click", function(){window.location.href='game.html'})
    
// method 3

// playBtn.addEventListener("click",changepage)
// function changepage(){
//     window.location.href='game.html'
// }

// method 4 by addinh onclick event inside the required tag

function GamePage(){
    window.location.href='game.html'
}














