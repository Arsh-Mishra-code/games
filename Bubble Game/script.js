var timer =60;
var Newscore =0;
var hitnew =0;

function Proscore(){
    Newscore+= 10;
   document.querySelector("#scoreval").textContent= Newscore;
 
}
function getNewHit(){
    hitnew =  Math.floor(Math.random()*10);
    document.querySelector("#HIT").textContent = hitnew;
}
function makebubble(){
bubblegi ="";
for(var i = 1; i<=95; i++){
    var rn= Math.floor(Math.random()*10)
    bubblegi +=`<div class="bubble">${rn}</div>`
}
document.querySelector("#centerbuttom").innerHTML= bubblegi;
}
function runtimer(){
   var Gametimer= setInterval(function(){
        if(timer>0){
            timer--;
                  
            document.querySelector("#timerval").textContent = timer;
        }else{
            
            clearInterval(Gametimer)
            document.querySelector("#centerbuttom").innerHTML=`<h4>Game Over</h4><br>`
        }

    } ,1000)
}
document.querySelector(`#centerbuttom`).addEventListener("click" ,function(e){
    var clickNumber = Number(e.target.textContent);
    if(clickNumber ===hitnew)
        runtimer(); 
        makebubble();
        getNewHit();
        Proscore()

})

runtimer();
makebubble();
getNewHit();







