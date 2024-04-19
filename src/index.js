document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector('#create-task-form')
const taskInput = document.querySelector('#new-task-description')
const taskList = document.querySelector('#tasks') 

form.addEventListener('submit', event => {
  event.preventDefault(); 
  const taskDescription = taskInput.value;
  const taskItem = document.createElement('li') 
  taskItem.textContent = taskDescription;
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'x' 
  deleteButton.addEventListener('click', () => {
    taskItem.remove()
  })
  taskItem.appendChild(deleteButton)
  taskList.appendChild(taskItem)
  taskInput.value = ''

   })
})

