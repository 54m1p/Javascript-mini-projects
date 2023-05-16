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
    console.log(arrNew,'arrnew');
}
function bdayCheck(){
    let inpDate = new Date(document.getElementById("inpDate").value);
     let list = localStorage.getItem("list") != null ? JSON.parse(localStorage.getItem("list")) : [];
    let listDob, listName;
    for(let i = 0; i < list.length; i++){
        listName = list[i].name;
        listDob = new Date(list[i].dob);
        if(inpDate.getMonth() === listDob.getMonth() && inpDate.getDate() === listDob.getDate()){
            const node = document.createElement("Div");
            const text = document.createTextNode(listName + " has birthday on "+ listDob);
            node.appendChild(text);
            document.querySelector(".result").appendChild(node);
        }
    }

}