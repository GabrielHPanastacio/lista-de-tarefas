const taskInput = document.querySelector('#task-input');
const btnAdd = document.querySelector('#btn-add');
const taskList = document.querySelector('#task-list');

btnAdd.addEventListener('click', function() {

    const taskText = taskInput.value;

    if (taskText === ""){
        return;
    }
    
    const newTaskItem = document.createElement('li');

    newTaskItem.addEventListener('click', function(){
        newTaskItem.classList.toggle('completed');
    });

    newTaskItem.textContent = taskText;

    taskList.appendChild(newTaskItem);

    taskInput.value = "";

    taskInput.focus();
});