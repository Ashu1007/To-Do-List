// Select elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add a new task when clicking the "Add" button
addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        newTaskInput.value = ''; // Clear the input field
    }
});

// Add task to the list
function addTask(taskText) {
    // Create list item
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Create task content
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">❌</button>
        </div>
    `;

    // Add event listener for completing task
    li.querySelector('.complete-btn').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Add event listener for deleting task
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Append to task list
    taskList.appendChild(li);
}

// Optional: Add task with Enter key
newTaskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});