// VARIABLES 
const input = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.add-task-button');
const pauseButton = document.querySelector('.pause-button');
const playButton = document.querySelector('.play-button');
const stopButton = document.querySelector('.stop-button');
const taskListContainer = document.querySelector('.list-container');
const prioritySelect = document.querySelector('.priority-select');
const scoreDisplay = document.querySelector('.score');

// POINT SYSTEM
let score = 0;

// Priority badge colors and points
const prioritySettings = {
  "Critical": { color: "bg-red-900", points: 50 },
  "High": { color: "bg-orange-600", points: 30 },
  "Medium": { color: "bg-yellow-500", points: 20 },
  "Low": { color: "bg-green-600", points: 10 }
};

// EVENT LISTENERS 

addTaskButton.addEventListener('click', function(){
  let taskName = input.value.trim();
  let priority = prioritySelect.value;

  if (taskName === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task container div
  const newTask = document.createElement('div');
  newTask.classList.add("task-item", "flex", "flex-row", "items-center", "mb-3");

  // Set dynamic priority color and points
  const { color, points } = prioritySettings[priority] || { color: "bg-gray-500", points: 0 };

  // Populate new task HTML
  newTask.innerHTML = `
    <img class="check-toggle h-8 w-8 mr-3 cursor-pointer" src="images/unchecked.png" alt="check">
    <li class="task-name text-lg">${taskName}</li>
    <div class="priority-badge ${color} text-white font-semibold ml-5 py-1.5 px-5 rounded-full">
      ${priority}
    </div>
    <div class="task-points ml-2 p-2 rounded-full ${color}">${points}</div>
  `;

  // Append to the list
  taskListContainer.appendChild(newTask);

  // Reset input
  input.value = "";
});

// Toggle check icon and award points when task item image is clicked
taskListContainer.addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('check-toggle')) {
    const taskItem = e.target.closest('.task-item');
    const taskName = taskItem.querySelector('.task-name');
    const taskPoints = parseInt(taskItem.querySelector('.task-points').textContent);

    if (e.target.src.includes("unchecked.png")) {
      e.target.src = "images/checked.png";
      taskName.classList.add("line-through", "text-gray-500");

      // Add points
      score += taskPoints;
      scoreDisplay.textContent = `Score: ${score}`;

    } else {
      e.target.src = "images/unchecked.png";
      taskName.classList.remove("line-through", "text-gray-500");

      // Subtract points
      score -= taskPoints;
      scoreDisplay.textContent = score;
    }
  }
});

// Timer control logs
playButton.addEventListener('click', function(){
  console.log('Starting Clock');
});

pauseButton.addEventListener('click', function(){
  console.log('Pausing Clock');
});

stopButton.addEventListener('click', function(){
  console.log('Stopping Clock');
});
