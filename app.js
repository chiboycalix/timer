//Declaration of Variables
var start = document.getElementById('start')
var stop = document.getElementById('stop')
var pause = document.getElementById('pause')
var resume = document.getElementById('resume')
var displayDiv = document.getElementById('displayDiv')
var milliSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var timer;

//Adding Event Listeners
start.addEventListener('click', startTimer)
pause.addEventListener('click', pauseTimer)
stop.addEventListener('click', stopTimer)
resume.addEventListener('click', resumeTimer)

//Start Timer function
function startTimer(){
    if(!timer){
        stopTimer()
        timer = setInterval(runTimer, 10);
    } 
}
function runTimer(){
    displayDiv.textContent = (hours < 10 ? "0" + hours : hours ) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds <10 ? "0" +seconds : seconds);
    milliSeconds++;
    if(milliSeconds === 100){
        milliSeconds = 0;
        seconds++;
    }
    if(seconds === 60){
        seconds = 0;
        minutes++
    }
    if(minutes === 60){
        minutes = 0;
        hours++
    }
}

//pause timer function
function pauseTimer(){
    clearInterval(timer)
    timer = false;
    
}

//stop timer function
function stopTimer(){
    clearInterval(timer);
    timer = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    displayDiv.textContent = (hours < 10 ? "0" + hours : hours ) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds <10 ? "0" +seconds : seconds);
  
}

//resume timer function
function resumeTimer(e){
    if(!timer){
       
        timer = setInterval(runTimer, 10);
        
    }
    
}