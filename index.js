// SELECTORS
let todo = document.querySelector('#newTodo');
let todoList = document.querySelector('#todoList');




todo.addEventListener('input', function(e) {
  let value = this.value;
  saveTodo(value)
  
  e.preventDefault()
});



// FUNCTIONS
function saveTodo(e) {
  console.log(e);
  let liElement = document.createElement('li');
  liElement.classList.add('items')
  todoList.appendChild(liElement)
}
