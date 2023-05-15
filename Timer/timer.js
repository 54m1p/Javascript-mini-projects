function validateTime(hour,min,sec){
    if( isNaN(hour)|| isNaN(min)|| isNaN(sec)){
        return false;   
    }else if(hour<0||min<0||sec<0||hour>=24||min>=60||sec>=60){
        return false;
    }else{
        return true;
    }
}
var remSeconds;
console.log(stopFlag);
function timerFn(){
    var hour = document.getElementById("hh").value;
    var min = document.getElementById("mm").value;
    var sec = document.getElementById("ss").value;
    remSeconds = toSec(hour,min,sec);
    var validResponse = validateTime(hour,min,sec);
    if(validResponse == false)
    { 
        alert("Invalid date"); 
        return false;
    }

    if(stopFlag == true){
        clearInterval(interval)
    }else{
        startTimer();
        tglTimer();
        stopFlag = false;
    }
  
   
 }

function updateTimer(remSeconds){
        var h = Math.floor(remSeconds/3600);
        remSeconds  = remSeconds % 3600;
    
        var m = Math.floor(remSeconds/ 60);
        remSeconds = remSeconds  % 60;
    
         document.getElementById("ss").value = remSeconds;
        document.getElementById("hh").value = h;
        document.getElementById("mm").value = m;
}

function toSec(hour, min, sec){
    return (parseInt(hour)*3600 + parseInt(min)*60 + parseInt(sec));
}
var interval;
function startTimer(){
    interval =  setInterval(myTimer, 1000);
}
var stopFlag =false;
function myTimer(){
    if(stopFlag){
        clearInterval(interval);
        return false;
    }
       

    console.log(remSeconds);
    if(parseInt(remSeconds) <= 0){
        stopTimer();
        return;
    }
    remSeconds -= 1;
    updateTimer(remSeconds);
}
function tglTimer(){
    var tgl= document.getElementById("timerBtn");
    if(tgl.innerText == "Start"){
        tgl.innerText="Stop";
    }else{
        tgl.innerText == "Start";
        stopFlag = true;
    } 

}
function stopTimer(){
    // tglTimer();
    stopFlag = true;
}