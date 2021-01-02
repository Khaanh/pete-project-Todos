// SELECTORS
let todoInput = document.querySelector('#newTodo');
let todoList = document.querySelector('#todoList');


todoList.addEventListener('click', function(e) {
  let items = e.target;
  doneTask(items)
  console.log(items);
})


//LIST OF EVENTLISTENER
todoInput.addEventListener('keydown', function(e) {
  let value = this.value;
  
  if (e.keyCode === 13) {
    saveTodo(value)
    clearInput(this)
    doneTask();
    e.preventDefault()
  }

});



// FUNCTIONS SAVE TASK AND CREATE ELEMENTS
function saveTodo(task) {
  console.log(task);
  // CREATE LI
  let liElement = document.createElement('li');
  liElement.classList.add('items');

  // CREATE TODO ITEMS
  let todoItems = document.createElement('div');
  todoItems.classList.add('todo-items');
  todoItems.innerHTML = task;

  // CREATE BTN DONE
  let btnDone = document.createElement('button');
  btnDone.classList.add('fas', 'fa-check');
  
  // CREATE BTN REMOVE
  let btnRemove = document.createElement('button');
  btnRemove.classList.add('fas', 'fa-times');

  // APPEND ELEMENTS IN UL
  liElement.appendChild(todoItems);
  liElement.appendChild(btnRemove);
  liElement.appendChild(btnDone);
  todoList.appendChild(liElement);
}

// FUNCTIONS CLEAR INPUT AFTER CREATED TASK
function clearInput(inputVal) {
  inputVal.value = '';
}

//FUNCTIONS MARK DONE TASK
function doneTask(itemsDone) {
  // itemsDone.classList.add('is-done');
}