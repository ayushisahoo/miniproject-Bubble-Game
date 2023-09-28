var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){
    var clutter ="";
    
    for(var i=1; i<=90; i++){
        var rn =Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;

}


function increaseScore(){
    score += 10;
    document.querySelector("#scoreValue").textContent= score;
}

function hitvalue(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer(){
   var timerrn= setInterval(function(){
    if (timer > 0){
        timer--;
        document.querySelector("#timeInterval").textContent = timer;
    }
    else{
        clearInterval(timerrn)
        document.querySelector("#pbtm").innerHTML=  `<h1>Game Over, your score is ${score}</h1>`
    }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    console.log(clickedNum)
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        hitvalue();
    }
})

hitvalue();
runTimer();
makeBubble();

