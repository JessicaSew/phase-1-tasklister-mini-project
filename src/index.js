
//document.addEventListener("DOMContentLoaded", () => { 
    // your code here
     //});
  const taskForm = document.getElementById("create-task-form") 
  const taskDescription = document.getElementById("new-task-description") 
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
const task = document.createElement('li')

task.textContent = taskDescription.value
taskList.appendChild(task)
taskDescription.value = ""
     })

  

