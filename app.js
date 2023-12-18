let todo = [];

let req = prompt("Please enter Request");

// console.log(req);

while(true) {
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("_______________");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("________________");
    } else if(req == "add"){
       let task = prompt("please enter a task that you want to add");
       todo.push(task);
       console.log("task added");
    }  else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.slice(idx, 1);
        console.log("task deleted");
    }   else{
        console.log("Wrong Request");
    }
    
req = prompt("Please enter Request");
    

}
