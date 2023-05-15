var today = new Date();
function bdayCalc(){
    var bday = new Date(document.getElementById("bdayInput").value);
    var sub = today.getTime()-bday.getTime();
    let day = sub/(1000*60*60*24);
    if(day<0){
        alert("you are not born yet");
        return;
    }
    document.getElementById("result1").innerHTML="You are "+ day.toFixed(0) +" days old";
    bday.setFullYear(today.getFullYear());

    if (today > bday) {
    bday.setFullYear(today.getFullYear() + 1);
    }
    const oneDay = 24*60*60*1000;
    const remDay = Math.floor((bday.getTime()-today.getTime())/oneDay);
    document.getElementById("result2").innerHTML = "Your next birthday is after "+ remDay +" days."
}
