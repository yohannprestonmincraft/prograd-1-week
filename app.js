var listOfActivities=[];

var input =document.getElementById("input");

var toDoList =document.getElementById("todolist");

document.getElementById("button").onclick=click;

function click(){
    listOfActivities.push(input);
    console.log(listOfActivities);
    input.value="";
    showlist();
}

function showlist(){
toDoList.innerHTML="";
listOfActivities.forEach(function(current_value, index){
    toDoList.innerHTML+=("<li>"+current_value+">a onclick='editItem("+index+")'>edit</a>"+
    ">a onclick='deleteItem("+index+")'>&times</a></li>")
})
}

function editItem(index){
    var newValue=prompt("please insert your value");
}