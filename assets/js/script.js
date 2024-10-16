const myModal = $(".modal");

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
if (!taskList) {
  taskList = [];
}
// Todo: create a function to generate a unique task id
function generateTaskId() {}

// Todo: create a function to create a task card
function createTaskCard(task) {
  // const taskCardContainer = document.createElement("div");
  // taskCardContainer.classList.add("card-container");

  const taskCardContainer = $(`<div id="${task.id}"class='task-card'>`)

  // check date if its today
  if(true) {
    taskCardContainer.css("background-color", "yellow")
  }


  // check date if its past today
  if(true) {
    taskCardContainer.css("background-color", "red")
  }

  //check date if its in the future
  if(true) {
    taskCardContainer.css("background-color", "white")
  }

  taskCardContainer.html(`
            <h1>${task.title}</h1>
            <h3>${task.dueDate}</h3>

        `);


    taskCardContainer.draggable({
      zIndex: 20
    });

  return taskCardContainer;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  $("#todo-cards").empty()
  $("#in-progress-cards").empty()
  $("#done-cards").empty()
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];

    const taskCard = createTaskCard(task);

    if (task.status == "to-do") {
      $("#todo-cards").append(taskCard);
    }

    if (task.status == "in-progress") {
      $("#in-progress-cards").append(taskCard);
    }

    if (task.status == "done") {
      $("#done-cards").append(taskCard);
    }
  }
}

// Todo: create a function to handle adding a new task

function handleAddTask(event) {
  event.preventDefault();
  const taskTitle = $("#task-title-input").val();
  const taskDueDate = $("#task-due-date-input").val();
  const taskDescription = $("#task-description").val();

  const newTask = {
    id: crypto.randomUUID(),
    title: taskTitle,
    dueDate: taskDueDate,
    description: taskDescription,
    status: "to-do",
  };

  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  $(".modal").modal("hide");
}
const saveChanges = $("#save-changes");
saveChanges.on("click", handleAddTask);

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $("#task-due-date-input").datepicker();


  $(".lane").droppable({
    accept: ".task-card",
    drop: function(event, ui) {
      const laneId = event.target.id;
      const taskId = ui.draggable[0].id;

      const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
      
      const updatedList = taskList.map(task => {
        if(task.id === taskId) {
          task.status = laneId;
        }
        return task;
      })
      
      localStorage.setItem("tasks", JSON.stringify(updatedList));
      renderTaskList()
    }
  })

  renderTaskList()
});
