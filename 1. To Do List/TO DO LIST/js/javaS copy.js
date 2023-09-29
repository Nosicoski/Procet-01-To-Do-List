const newTaskInput = document.querySelector("#newTask");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

window.onload = function () {
  const tasks = getTasksFromLocalStorage();
  if(tasks) {
    tasks.forEach(function (task) {
      render(task);
    });
  }
};

function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.children).map((task) => task.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  let tasks = null;
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
  return tasks;
}

function addTask(e) {
  e.preventDefault();
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    render(taskText);

    saveTasksToLocalStorage();
  }
}

function render(taskText) {
  const taskItem = `<li>${taskText}<i class='bx bxs-trash'></i></li>`;
  taskList.innerHTML += taskItem;
  newTaskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("bxs-trash")) {
    e.target.parentElement.remove();
  }
});




