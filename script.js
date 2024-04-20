var timer =0;
var score =0;
var hitrn = 0;

function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent=score;
  
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble(){
   var cluterr="";

     for(var i=0;i<=113;i++){
       var rn = Math.floor(Math.random()*10);
       cluterr += `<div class="bubble">${rn}</div>`;
   }


   document.querySelector("#pbtm").innerHTML=cluterr;
 }

function runTimer(){ 
  timer=60;
var timerInterval= setInterval(function(){
  if(timer>0){
  timer--
  document.querySelector("#timerval").textContent=timer;
  }
  else{
    clearInterval(timerInterval);
    document.querySelector("#pbtm").innerHTML= `<h1> GAME OVER</h1>`;
    
  }
  
},1000)
}

document.querySelector("#pbtm").
  addEventListener("click",function(dets){
    var clickNum = (Number(dets.target.textContent));
   
   if(clickNum == hitrn ){
     
      increaseScore();
     makeBubble();
     getNewHit();
  
   }
     
  });



runTimer();
 
makeBubble();
getNewHit();










//  Event bubbling concept h
// jispe click karoge wo element par event raise hoga,aur event listener naa milne par event elment ke aprent par listener dhundhenga ,wha bhi naa milne par event parent ke parent  ke parent pa listener  dhundege