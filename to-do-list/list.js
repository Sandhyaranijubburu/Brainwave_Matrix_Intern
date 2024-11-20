function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    
    if (todoInput.value === '') {
        alert('Please enter a task');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `${todoInput.value} <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>`;
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
    
    todoList.appendChild(li);
    todoInput.value = '';
}

function deleteTodo(button) {
    const li = button.parentElement;
    li.remove();
}
