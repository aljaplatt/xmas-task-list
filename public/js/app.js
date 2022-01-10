// selectors
const taskInput = document.querySelector(".task-input");
const taskButton = document.querySelector(".task-button");
const taskList = document.querySelector(".task-list");
const seinQuotePar = document.querySelector(".quote");
const seinQuoteAuth = document.querySelector(".author");

// event listeners
taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);

// GET USER INPUT
const getUserInput = function (e) {
  let newTask = document.querySelector("form").value;
  console.log(`User input: ${newTask}.`);
  return newTask;
};

const url = "http://localhost:3000";

async function getTasks() {
  const response = await fetch(`${url}/tasks`);
  console.log(response);
  const { payload } = await response.json();
  console.log(payload);
  return payload;
}

async function getSeinfeldQuote() {
  const response = await fetch("https://seinfeld-quotes.herokuapp.com/random");
  const data = await response.json();
  let seinQuote = data.quote;
  let seinAuthor = data.author;
  seinQuotePar.innerText = seinQuote;
  seinQuoteAuth.innerText = seinAuthor;
}

getSeinfeldQuote();

// functions
function addTask(event) {
  // prevents form submission
  event.preventDefault();
  console.log("hello");
  // create task div - taskDiv
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  // create list item - newTask
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value; // innertext doesnt carry whitespace - web dev simp video
  newTask.classList.add("task-item");
  // append li (newTask) to div
  taskDiv.appendChild(newTask);
  // Add buttons - complete & delete

  // COMPLETE BUTTON
  const completeButton = document.createElement("button");
  // add icon to button - innerHTML??
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  // add class to button
  completeButton.classList.add("complete-btn");
  // append button to the task div
  taskDiv.appendChild(completeButton);

  // DELETE BUTTON
  const deleteButton = document.createElement("button");
  // add icon to button - innerHTML??
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  // add class to button
  deleteButton.classList.add("delete-btn");
  // append button to the task div
  taskDiv.appendChild(deleteButton);
  // append to list
  taskList.appendChild(taskDiv);
  // clear form input value
  taskInput.value = "";
}

function deleteTask(e) {
  //
  const item = e.target;
  //
  if (item.classList[0] === "delete-btn") {
    // remove whole parent element
    const task = item.parentElement;
    task.remove();
  }

  // mark as completed
  if (item.classList[0] === "complete-btn") {
    // remove whole parent element
    const task = item.parentElement;
    task.classList.toggle("completed");
  }
}
