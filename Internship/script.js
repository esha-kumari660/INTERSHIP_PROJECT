const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }


  const li = document.createElement('li');
  li.className = 'task-item';


  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  li.querySelector('span').addEventListener('click', function () {
    li.classList.toggle('completed');
  });


  li.querySelector('.delete-btn').addEventListener('click', function () {
    li.remove();
  });


  taskList.appendChild(li);


  taskInput.value = '';
});
