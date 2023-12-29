var palayer = document.getElementById("player")
var score = document.getElementById("score")
var timer = document.getElementById("timer")  
var RealTimer = 20
var realscore = 0
var InetervalCounter = 1000
var interval = setInterval(StrtTimer,InetervalCounter)
palayer.addEventListener("click",function(){
    var RandomPosisionX = Math.floor(Math.random() * 600)
    var RandomPosisionY = Math.floor(Math.random() * 600)
    var RandomScale = Math.floor(Math.random()  * 100)
    if(RandomScale < 10){
        RandomScale = 20
        palayer.style.height = RandomScale  + "px"
        palayer.style.width = RandomScale  + "px"
    }
    palayer.style.marginLeft = RandomPosisionX + "px"
    palayer.style.marginTop = RandomPosisionY  + "px"
    palayer.style.height = RandomScale  + "px"
    palayer.style.width = RandomScale  + "px"


    realscore++
    score.textContent = "Score" + " " + realscore
})

    

function StrtTimer(){
    RealTimer--
    timer.textContent="Timer" + " " + RealTimer
    if(RealTimer < 1){
        EndGame()
    }
}



function StopTimer(){
    
}
function EndGame(){
    Swal.fire("Oops Timer is out, your Score is " + realscore);
    clearInterval(interval)
}