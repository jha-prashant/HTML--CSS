let todo=[ ];
let req = prompt("typeyour request here");
while(true){
    if(req=="quit"){
        console.log("app quiting");
        break;
    }


 if(req=="list"){
    console.log("-----");
    for(task of todo){
        console.log(task);
    }
    console.log("----");
    }
 else if(req=="add"){
    let task=prompt("please enter your task you want to add");
    todo.push(task)
    console.log("task added")
 } 
 let req = prompt("typeyour request here");
} 