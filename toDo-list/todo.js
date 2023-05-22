var count = 1;
var taskArr = []
var addTask = () =>{
        let li = document.createElement("li");
        li.id = "list-"+count;
        let node = document.createElement("input");
        node.type = 'checkbox';
        node.name = 'chkBox';
        node.className = "chkBox";
        node.id = "checkbox-"+count;

        li.appendChild(node);
        let label = document.createElement("label");
        label.htmlFor = "checkbox-"+count;
        label.innerHTML = document.getElementById("addTasks").value;
        li.appendChild(label);  
        if(label.innerHTML === ""){
                alert("Cannot enter empty task");
        }
        else{
                document.getElementById("myUl").appendChild(li);
                taskArr.push(label.innerHTML);
        }
        document.getElementById("addTasks").value = "";
        var del = document.createElement("a");
        var txt = document.createTextNode("x");
        del.className = "task-item close";
        del.id = "close-"+count;
        del.appendChild(txt);
        label.appendChild(del);

var checkbox = document.getElementById("checkbox-"+count);

checkbox.addEventListener('change', (event)=>{
        if(event.currentTarget.checked){
                label.style.textDecoration ='line-through';
        }
        else{
                label.style.textDecoration = 'none';
        }
});
count++;
var list = document.getElementById("list-"+count);
var close = document.getElementsByClassName("task-item");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function(e) {
    var div = this.parentElement.parentElement;
    div.remove();
    //div.style.display = "none";
    //checkBox[i].style.display = "none";
  }
}
}
