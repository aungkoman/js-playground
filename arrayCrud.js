console.log("hello");

var taskData = [
    {id:1, name : "CRUD in React", complete:false},
    {id:2, name : "Get Back to Basic", complete:false},
    {id:3, name : "Live scraping and logic", complete:false},
];

console.log("org data is ");
console.log(JSON.parse(JSON.stringify(taskData)));

function addTaskData(task){
    taskData.push(task);
    console.log("addTaskData is ");
    console.log(task);
    console.log(JSON.parse(JSON.stringify(taskData)));
}
addTaskData({id:4, name : 'I need to calm down', complete : false});


function completeTaskData(id){
    taskData.map((task)=>{
        if(task.id == id ) task.complete = true;
    });
    console.log("completeTaskData id : "+id);
    console.log(JSON.parse(JSON.stringify(taskData)));
}
completeTaskData(1);

function deleteTaskData(id){
    let delIndex = -1;
    taskData.map((task,index)=>{
        if(task.id == id ) delIndex = index;
    })
    if(delIndex < 0 ) return;
    taskData.splice(delIndex,1);
    console.log('deleteTaskData id '+id);
    console.log(JSON.parse(JSON.stringify(taskData)));
}
deleteTaskData(3);