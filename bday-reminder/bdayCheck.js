function addDetails(){

    let arrNew = localStorage.getItem("list") != null ? JSON.parse(localStorage.getItem("list")) : [];
    console.log(arrNew, 'array');
    
    let usrName = document.getElementById("usrName").value;

    console.log(usrName, 'name');
    let usrDOB = document.getElementById("usrDOB").value;
    console.log(usrDOB,'dob');
    arrNew.push({
        name: usrName,
        dob: usrDOB
    })
    localStorage.setItem("list",JSON.stringify(arrNew));
    console.log(list,'list');

}
function bdayCheck(){
    let inpDate = new Date(document.getElementById("inpDate").value);
    let list = localStorage.getItem("list") != null ? JSON.parse(localStorage.getItem("list")) : [];
    let listDob, listName;
    const dateFormat = {month: 'long', day: 'numeric'}
    document.getElementById("result-text").innerHTML = " "; 
    document.getElementById("result-head").innerHTML = " "; 
    document.getElementById("no-result").innerHTML = " ";
    let flag = false;
    for(let i = 0; i < list.length; i++){
        listName = list[i].name;
        listDob = new Date(list[i].dob);
        if(inpDate.getMonth() === listDob.getMonth() && inpDate.getDate() === listDob.getDate()){
            flag =true;
            const node = document.createElement("li");
            const text = document.createTextNode(listName);
            node.appendChild(text);
            document.querySelector(".result-text").appendChild(node);
            document.getElementById("result-head").innerHTML = "These people have birthdays on "+  inpDate.toLocaleString('en-US', dateFormat);
        }
    }
    if(flag == false){
        document.getElementById("no-result").innerHTML = "No one has birthday on "+  inpDate.toLocaleString('en-US', dateFormat);
    }
}
