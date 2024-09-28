// Get the input field, button, and task list elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


// Create an array to store tasks
let tasks = [];

// Add an event listener to the add task button
addTaskBtn.addEventListener('click', () => {
  // Get the task input value
  const task = taskInput.value.trim();
  console.log(task);

  // Check if the task is not empty
  if (task) {
    // Add the task to the tasks array
    tasks.push(task);

    // Clear the input field
    taskInput.value = '';

    // Update the task list
    updateTaskList();
    // Display a success message
    alert('Task added successfully!');
    // Disable the add task button

  }
});

// Function to update the task list
function updateTaskList() {
  // Clear the task list
  taskList.innerHTML = '';


  // Loop through the tasks array and create list items
  tasks.forEach((task, index) => {
    const taskListItem = document.createElement('li');
    taskListItem.textContent = task;
    taskList.appendChild(taskListItem);
    
  });
}

// Call the updateTaskList function to display the initial task list
updateTaskList();