// var myArr = [
//     {
//         name: "Jack",
//         dob: "2022-10-06"
//     },
//     {
//         name: "Tom",
//         dob: "2022-10-05"
//     },
//     {
//         name: "Abc",
//         dob: "2022-10-05"
//     },
//     {
//         name: "Xyz",
//         dob: "2023-05-15"
//     },
//     {
//         name: "Def",
//         dob: "2023-05-15"
//     },
//     {
//         name: "Jkl",
//         dob: "2022-10-01"
//     },
// ];


// var today = new Date();
// let arrDate =[];
// function bdayCheck(){
//     let inpDate = new Date(document.getElementById("inpDate").value);

//     for(let i=0;i< myArr.length;i++){
//         arrDate.push(new Date(myArr[i].dob));
      

//         if(arrDate[i].getMonth() === inpDate.getMonth() && arrDate[i].getDate() === inpDate.getDate()){
//             const node = document.createElement("div");
//             const text = document.createTextNode(myArr[i].name+ " has birthday on "+myArr[i].dob);
//             node.appendChild(text);
//             document.querySelector(".result").appendChild(node);
//         }
//     }
// }


// function addDetails(){

//     let arrNew = localStorage.getItem("list") != null ? JSON.parse(localStorage.getItem("list")) : [];
//     console.log(arrNew, 'array');
    
//     let usrName = document.getElementById("usrName").value;

//     console.log(usrName, 'name');
//     let usrDOB = document.getElementById("usrDOB").value;
//     console.log(usrDOB,'dob');
//     arrNew.push({
//         name: usrName,
//         dob: usrDOB
//     })
//     localStorage.setItem("list",JSON.stringify(arrNew));
//     checkBday(arrNew);
// }

// function checkBday(arrNew){
//     let usrInfo = [];
//     usrInfo = JSON.parse(localStorage.getItem("arrNew"));
//     console.log(usrInfo,'usrinfo');
// }