window.onload = addTask;
var count = 1;
var taskArr = localStorage.getItem("listTask") != null ? JSON.parse(localStorage.getItem("listTask")) : [];
var todo;
var addTask = () =>{
        let inputTask = document.getElementById("addTasks").value;
        todo = {
               task: inputTask,
               completed: false
       }
       taskArr.push(todo);
       localStorage.setItem("listTask",JSON.stringify(taskArr));

document.getElementById("addTasks").value = "";
        let li;
        for(let i = 0; i<taskArr.length;i++){
                li = document.createElement("li");
                li.id = "list-"+i+1;
                let node =document.createElement('input');
                node.type = 'checkbox';
                node.name = 'chkBox';
                node.className = 'chkBox';
                node.id = "checkbox-"+i+1;
                li.appendChild(node);
                let label = document.createElement("label");
                label.htmlFor = "checkbox-"+i+1;
                label.innerHTML = taskArr[i].task;
                li.appendChild(label);
                document.getElementById("myUl").appendChild(li);
                var del = document.createElement("a");
                var txt = document.createTextNode("\u00d7");
                del.className = "task-item close";
                del.id = "close-"+count;
                del.appendChild(txt);
                label.appendChild(del);
        }
        // li.id = "list-"+count;
        // let node = document.createElement("input");
        // node.type = 'checkbox';
        // node.name = 'chkBox';
        // node.className = "chkBox";
        // node.id = "checkbox-"+count;
        // li.appendChild(node);
        // let label = document.createElement("label");
        // label.htmlFor = "checkbox-"+count;
        // label.innerHTML = document.getElementById("addTasks").value;
        // li.appendChild(label);  
        // let tasklist = document.getElementById("addTasks").value;
        // let checkStat = document.getElementById("checkbox-"+count);
        // if(label.innerHTML === ""){
        //         alert("Cannot enter empty task");
        //         return;
        // }
        // document.getElementById("myUl").appendChild(li);
       
        // var del = document.createElement("a");
        // var txt = document.createTextNode("\u00d7");
        // del.className = "task-item close";
        // del.id = "close-"+count;
        // del.appendChild(txt);
        // label.appendChild(del);
var checkbox = document.getElementById("checkbox-"+count);

checkbox.addEventListener('change', (event)=>{
console.log('listTask',listTask);       
        for(let i=0; i<taskArr.length; i++){
                if(event.currentTarget.checked){
                        console.log(listTask[i],'this is from list');
                        label.style.textDecoration ='line-through'; 
                       // taskArr[i].completed = 'true';
                       //console.log('taskarr when checked',taskArr[i].completed);

                }
                else{
                        label.style.textDecoration = 'none';
                }

}
});
count++;
var list = document.getElementById("list-"+count);
var close = document.getElementsByClassName("task-item");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function(e) {
    var div = this.parentElement.parentElement;
    div.remove();
  }
}
}
