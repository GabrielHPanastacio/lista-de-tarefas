const taskInput = document.querySelector('#task-input');
const btnAdd = document.querySelector('#btn-add');
const taskList = document.querySelector('#task-list');

btnAdd.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }
    
    const newTaskItem = document.createElement('li');

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn');

    const textSpan = document.createElement('span');
    textSpan.classList.add('task-text');
    textSpan.textContent = taskText;

    checkBtn.addEventListener('click', function() {
        newTaskItem.classList.toggle('completed');
    });

    newTaskItem.appendChild(checkBtn);
    newTaskItem.appendChild(textSpan);

    taskList.appendChild(newTaskItem);

    taskInput.value = "";
    taskInput.focus();
});