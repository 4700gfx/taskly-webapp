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

  //Creates a Div
  const newTask = document.createElement('div')

  //Adds HTML to Div 
  newTask.innerHTML = `<div class="task-item flex flex-row">
                          <img class="checked h-8 w-8 mt-2 mr-2" src="images/checked.png" alt="unchecked">
                            <li class="text-lg mt-2">${taskName}</li>
                          <div class="bg-red-900 text-white font-semibold mt-1 ml-5 
                          py-1.5 px-8 rounded-full">
                            Critcal
                          </div>
                        </div> `;
  //Adds Div component after the ul
  document.querySelector('.list-container').appendChild(newTask)

  //Resets Input Bar 
  input.value = " ";

  //Reads the Task to Console
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

