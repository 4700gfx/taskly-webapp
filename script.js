//VARIABLES FOR APPLICATION 

//Main To Do Component Variables
const homePanel = document.querySelector('.home-panel');
const filteredList = document.querySelector('.filtered-list')
const taskContainer = document.querySelector('.task-container')
const taskList = document.querySelector('.task-list')
const taskItem = document.querySelector('.task-item')

//Buttons Variables 
let input = document.querySelector('.task-input')
const addTaskButton = document.querySelector('.add-task-button');
const pauseButton = document.querySelector('.pause-button');
const playButton = document.querySelector('.play-button');
const stopButton = document.querySelector('.stop-button');













//Event Listeners
addTaskButton.addEventListener('click', function(){
  //Caputures Value of Input Bar 
  let taskName = input.value 

  const newTask = document.createElement('li')
  newTask.textContent = taskName;
  document.querySelector('.list-container').appendChild(newTask)
  input.value = " ";
  console.log(taskName)

  
})

playButton.addEventListener('click', function(){
  console.log('Starting Clock')
})


pauseButton.addEventListener('click', function(){
  console.log('Pausing Clock')
})


stopButton.addEventListener('click', function(){
  console.log('Stopping Clock')
})

