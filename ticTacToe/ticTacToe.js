var toggleFlag = 0;
var clickCount = 0;
let fnBoxclick1 = () =>{
    console.log("box1 clicked");
    clickCount++;
    if(toggleFlag == 0){
        document.getElementById("box1").value = "O";
        document.getElementById("box1").disabled = true;
        toggleFlag = 1;
    }
    else{
        document.getElementById("box1").value = "X";
        document.getElementById("box1").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box1 value :" +toggleFlag);
}
let fnBoxclick2 = () =>{
    clickCount++;
    console.log("box2 clicked");
    if(toggleFlag == 0){
        document.getElementById("box2").value = "O";
        document.getElementById("box2").disabled = true;

        toggleFlag = 1;
    }
    else{
        document.getElementById("box2").value = "X";
        document.getElementById("box2").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box2 value :" +toggleFlag);
}
let fnBoxclick3 = () =>{
    clickCount++;
    console.log("box3 clicked");
    if(toggleFlag == 0){
        document.getElementById("box3").value = "O";
        document.getElementById("box3").disabled = true;
        toggleFlag = 1;
    }
    else{
        document.getElementById("box3").value = "X";
        document.getElementById("box3").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box3 value :" +toggleFlag);
}
let fnBoxclick4 = () =>{
    clickCount++;
    console.log("box4 clicked");
    if(toggleFlag == 0){
        document.getElementById("box4").value = "O";
        document.getElementById("box4").disabled = true;
        toggleFlag = 1;
    }
    else{
        document.getElementById("box4").value = "X";
        document.getElementById("box4").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box4 value :" +toggleFlag);
}
let fnBoxclick5 = () =>{
    clickCount++;
    console.log("box5 clicked");
    if(toggleFlag == 0){
        document.getElementById("box5").value = "O";
        document.getElementById("box5").disabled = true;
        toggleFlag = 1;
    }
    else{
        document.getElementById("box5").value = "X";
        document.getElementById("box5").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box5 value :" +toggleFlag);
}
let fnBoxclick6 = () =>{
    clickCount++
    console.log("box6 clicked");
    if(toggleFlag == 0){
        document.getElementById("box6").value = "O";
        document.getElementById("box6").disabled = true;
        toggleFlag = 1;
    }
    else{
        document.getElementById("box6").value = "X";
        document.getElementById("box6").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box6 value :" +toggleFlag);
}
let fnBoxclick7 = () =>{
    clickCount++;
    console.log("box7 clicked");
    if(toggleFlag == 0){
        document.getElementById("box7").value = "O";
        document.getElementById("box7").disabled = true;
        toggleFlag = 1;
    }
    else{
        document.getElementById("box7").value = "X";
        document.getElementById("box7").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box7 value :" +toggleFlag);
}
let fnBoxclick8 = () =>{
    clickCount++;
    console.log("box8 clicked");
    if(toggleFlag == 0){
        document.getElementById("box8").value = "O";
        document.getElementById("box8").disabled = true;
        toggleFlag = 1;
    }
    else{
        document.getElementById("box8").value = "X";
        document.getElementById("box8").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box8 value :" +toggleFlag);
}
let fnBoxclick9 = () =>{
    clickCount++;
    console.log("box9 clicked");
    if(toggleFlag == 0){
        document.getElementById("box9").value = "O";
        document.getElementById("box9").disabled = true;
        toggleFlag = 1;
    }
    else{
        document.getElementById("box9").value = "X";
        document.getElementById("box9").disabled = true;
        toggleFlag = 0;
    }
    fncheck();
    console.log("Box9 value :" +toggleFlag);
}
var boxValue = [].fill(null);
var boxIds = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];

let fncheck = () =>{
        for (let i = 0; i<9;i++){
            boxValue[i] = document.getElementById(boxIds[i]).value;
        }
        if(clickCount>=5){
        fnResult();
        }
    }

let fnResult = () =>{
     if((boxValue[0] === boxValue[1] && boxValue[0] === boxValue[2] && boxValue[0] !== "")
    ||(boxValue[3]=== boxValue[4] && boxValue[3] === boxValue[5] && boxValue[3] !== "")||
    (boxValue[6]=== boxValue[7] && boxValue[6] === boxValue[8] && boxValue[6] !== "")||
    (boxValue[0]=== boxValue[3] && boxValue[0] === boxValue[6] && boxValue[0] !== "")||
    (boxValue[1]=== boxValue[4] && boxValue[1] === boxValue[7] && boxValue[1] !== "")||
    (boxValue[2]=== boxValue[5] && boxValue[2] === boxValue[8] && boxValue[2] !== "")||
    (boxValue[0]=== boxValue[4] && boxValue[0] === boxValue[8] && boxValue[0] !== "")||
    (boxValue[2]=== boxValue[4] && boxValue[2] === boxValue[6] && boxValue[2] !== "")){
        for(let j = 0; j<9; j++){
            document.getElementById(boxIds[j]).disabled = true;
        }
        if(toggleFlag == 1){
            document.getElementById("showResult").innerHTML = "O is winner";
        }
        else{
            console.log("X is winner");
            document.getElementById("showResult").innerHTML = "X is winner";
        }
        document.getElementById("resetBtn").style.display = "block";
    }
    else if(clickCount == 9){
        document.getElementById("showResult").innerHTML = "Draw game";
        document.getElementById("resetBtn").style.display = "block";
    }

}
let resetGame = () =>{
    for(let k = 0; k<9; k++){
        document.getElementById(boxIds[k]).value = "";
        document.getElementById(boxIds[k]).disabled = false;
    }
    document.getElementById("resetBtn").style.display = "none";
    document.getElementById("showResult").innerHTML = "";
    toggleFlag = 0;
    clickCount = 0;


}

