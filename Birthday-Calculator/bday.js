var today = new Date();
var test='string'

function bdayCalc(){
    var bday = new Date(document.getElementById("bdayInput").value);

    console.log(test)
    console.log(bday,'---------inside function')

    var sub = today.getTime()-bday.getTime();
    let day = sub/(1000*60*60*24);
    document.getElementById("result").innerHTML="You are "+ day.toFixed(0) +" days old";
}
