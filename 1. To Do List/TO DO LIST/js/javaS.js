const newTaskInput = document.querySelector("#newTask");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

function addTask(e) {
  e.preventDefault();
  const taskText = newTaskInput.value.trim();
  if (taskText) {
  render(taskText)

    localStorage.setItem('Task', taskList);

    const task = localStorage.getItem(taskList);

    saveTasksToLocalStorage(taskList);

        }}


addTaskButton.addEventListener("click", addTask);

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("bxs-trash")) {
    e.target.parentElement.remove();
  }
});

window.onload = function () {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);
    console.log(tasks)
    tasks.forEach(function (task) {
      render(task);
    });
  
  }
};

function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.children).map((task) => task.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));
} 

function render(taskText){ 
  const taskItem = `<li>${taskText}<i class='bx bxs-trash'></i></li>`;
  taskList.innerHTML += taskItem;
  newTaskInput.value = "";




}
