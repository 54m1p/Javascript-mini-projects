let inpArr = [];
let getInput = () =>{
    let inpText = document.getElementById("inpText").value;
    let inpDate = document.getElementById('inpDate').value;
    console.log('inpText',inpText);
    // let text = {
    //     name: inpText,
    //     date: inpDate
    // }
    inpArr.push({
        name:inpText,
        date: inpDate
    });
    document.getElementById('inpText').value = "";
    //sessionStorage.setItem(inpArr);
    inpArr.forEach((value)=>{
                console.log(value,'inpArr');   
});
sessionStorage.setItem("list1", JSON.stringify(inpArr));

console.log(inpArr,'inputarr');
createShowBtn();
}

let createShowBtn = () =>{
    let btnNode = document.createElement("button");
    btnNode.innerHTML = "Show" ;
    btnNode.onclick = showfn();
    document.getElementById("showDiv").appendChild(btnNode);
     

}