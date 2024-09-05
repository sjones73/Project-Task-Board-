const myModal = $('.modal')

// Retrieve tasks and nextId from localStorage


let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
if (!tasks) {
    tasks = [];
}
// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task

function handleAddTask(event){
    event.preventDefault();
    const taskTitle = $('#task-title-input').val();
    const taskDueDate = $('#task-due-date-input').val();
    const taskDescription = $('#task-description').val();

    const newTask = {
        id: crypto.randomUUID(),
        title: taskTitle,
        dueDate: taskDueDate,
        description: taskDescription,
        status:'To Do'

    }

    const taskList = JSON.parse(localStorage.getItem("tasks"));
    taskList.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(taskList));


    $('.modal').modal('hide');


}
const saveChanges = $('#save-changes');
saveChanges.on('click', handleAddTask);

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $('#task-due-date-input').datepicker();
} );

