console.log("hello")
var container=document.querySelector(".container");
var box1=document.querySelector(".box1");
var box1=document.querySelector(".box1");
var box2=document.querySelector(".box2");//tasks
var add_btn=document.querySelector("#push");
var bar=document.querySelector("#bar");
function Add(){
    if(bar.value.length==0){
        alert("Please enter the task");
    }
    else{
box2.innerHTML+= `
<div class="task">
            <span id="taskname">
                ${bar.value}
            
            </span>
               <button class="delete" ><i class="fa-solid fa-trash"></i></button>
               
        </div>



`
var current_tasks=document.querySelectorAll(".delete");
for(var i=0;i<current_tasks.length;i++){
    current_tasks[i].onclick=function(){
        this.parentNode.remove();
    }
}
var tas=document.querySelectorAll(".task");
for(var i=0;i<tas.length;i++){
    tas[i].onclick=function(){
        this.classList.toggle('completed');
    }
}



}
bar.value="";





    }

