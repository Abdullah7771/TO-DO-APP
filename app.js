function addTodo(){
    var list=document.getElementById("list");
    var todo_item=document.getElementById("todo-item");
    var li=document.createElement("li");
   
    

    

    var liText=document.createTextNode(todo_item.value);
console.log(liText);
var input=document.createElement("input");
   input.setAttribute("class","input")
    input.appendChild(liText);
    input.value=liText.nodeValue
 
    li.appendChild(input);
    input.setAttribute("disabled","true");
    input.setAttribute("id","edit");


    //create delbtn

    var delBtn=document.createElement("button");
    var delText=document.createTextNode("DELETE");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.setAttribute("class","del");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);



   //edit btn
    var editBtn=document.createElement("button");
     var editText=document.createTextNode("EDIT");
     editBtn.appendChild(editText);
     li.appendChild(editBtn);
     editBtn.setAttribute("onclick","editItem(this)");
     editBtn.setAttribute("class","edit");

     list.appendChild(li);
     todo_item.value="";
}


function deleteItem(m){
    console.log(m);
    console.log(m.childNodes);
    console.log(m.parentNode);
    m.parentNode.remove()
}
    function deleteAll(){
     var list=document.getElementById("list")       
        list.innerHTML="";

    }

    function editItem(e){
        var input=document.getElementById("edit")
          input.setAttribute("disabled","false");

        console.log(e.parentNode);
        console.log(e.parentNode.firstChild.value);
        
        var editValue=prompt("Enter edit value",e.parentNode.firstChild.value)
        e.parentNode.firstChild.value=editValue;

    }
