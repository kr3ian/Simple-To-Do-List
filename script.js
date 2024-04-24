// Initialization
const todoInput = document.getElementById("todoInput");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.querySelector(".tasklist"); 
const btnEdit = document.getElementById("btnEdit");
const btnDelete = document.getElementById("btnDelete");
const btnClear = document.getElementById("btnClear"); 

// Add Button
function addTask() {
  const newTask = todoInput.value.trim(); 

  if (newTask) {

    // Initialization
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const taskName = document.createElement("span");
    const taskButtons = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // Generate items in the browser
    checkbox.type = "checkbox";
    checkbox.classList.add("cbIcon");
    taskName.classList.add("task-name");
    taskName.textContent = newTask;
    taskButtons.classList.add("task-buttons");
    editButton.innerHTML = '<span class="edit-icon-container"><span class="edit-icon">&#9999;</span></span>';
    editButton.classList.add("edit-button");
    deleteButton.innerHTML = '<span class="delete-icon">&#128465;</span>';
    deleteButton.classList.add("delete-button");

    taskButtons.appendChild(editButton);
    taskButtons.appendChild(deleteButton);
    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(taskButtons);

    taskList.appendChild(listItem);

    todoInput.value = ""; 
  } else {
    alert("Please enter a task!");
  }
}

// Delete Button
function deleteTask(event) {
  
  if (event.target.classList.contains("delete-button")) {

    // Initialization
    const editButton = event.target; 
    const taskItem = editButton.parentElement.parentElement; 

    // Message Box
    const confirmDelete = confirm("Are you sure you want to delete this task?");

    // If user clicks "OK"
    if (confirmDelete) {   
      taskList.removeChild(taskItem);
    }
  }
}

// Edit Button
function editTask(event) {
  if (event.target.classList.contains("edit-button")) {

    // Initialization
    const taskItem = event.target.parentElement.parentElement; 
    const taskName = taskItem.querySelector(".task-name");

    const isEditing = taskName.classList.contains("editable");

    // User can modify task name
    if (isEditing) {
      const editedTask = taskName.textContent.trim();

      if (editedTask) {
        taskName.textContent = editedTask; 
      } else {
        alert("Please enter a task name!");
      }

      taskName.classList.remove("editable");
      taskName.contentEditable = false;

    } else {
      taskName.classList.add("editable");
      taskName.contentEditable = true; 
      taskName.focus();
    }
  }
}

// Clear All Button
btnClear.addEventListener("click", () => {
    taskList.innerHTML = ""; 
    taskList.style.marginTop = "30px"; 
  });

// Event Listener
btnAdd.addEventListener("click", addTask);
btnEdit.addEventListener("click", editTask);

taskList.addEventListener("click", editTask);
taskList.addEventListener("click", deleteTask);