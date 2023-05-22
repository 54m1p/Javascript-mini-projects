var taskArr =[];
var addTask = () =>{
        let li = document.createElement("li");
        let node = document.createElement("input");
        node.type = 'checkbox';
        node.name = 'chkBox';
        node.className = "chkBox";
        li.appendChild(node);
        let inputText = document.getElementById("addTasks").value;
        let tasks = document.createTextNode(inputText);
        li.appendChild(tasks);
        if(inputText === ""){
                alert("Cannot enter empty task");
        }
        else{
                document.getElementById("myUl").appendChild(li);
        }
        checkboxFn();
        document.getElementById("addTasks").value = "";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("X");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        // var close = document.getElementsByClassName("close");
        // for(let i =0; i<close.length;i++){
        //         close[i].onclick = closefn();
        // }
}
var checkbox = document.getElementsByClassName("chkBox");
var label = document.getElementsByTagName("li");
var checkboxFn= ()=>{
console.log("checkbox status", checkbox);
console.log("label");
checkbox.addEventListener('change', (event)=>{
        console.log("into the checked event");
        if(event.currentTarget.checked){
                label.style.textDecoration = 'line-through';
                console.log("checked");
        }
        else{
                li.style.textDecoration = 'none';
        }
});
}
