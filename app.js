var seconds = 0;
var minutes = 0;
var hours = 0;
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;
var interval = null;    
var status = "stopped"
function stopwatch(){
    seconds++
    if(seconds / 60 === 1){
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1){
        minutes = 0;
        houres++;
       }
    }
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function pause(){
    // var pause = document.getElementById("pause");
    // pause.src = pause.png;
    if (status === "stopped"){
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("pause").innerHTML = "Stop";
        status = "started";
    }
    // else{
    //     window.clearInterval(interval);
    //     document.getElementById("pause").innerHTML = "Start";
    //     // var play = document.getElementById("pause");
    //     // play.src = play.png;
    //     status = "stopped";
    // }
}
function pasue(){
    window.clearInterval(interval);
    document.getElementById("pause").innerHTML = "Start";
    // var pause = document.getElementById("pause");
    // pause.src = pause.png;
    status = "stopped";
}

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("pause").innerHTML = "Start"
}