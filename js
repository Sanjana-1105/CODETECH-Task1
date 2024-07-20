function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = taskInput.value;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');
      deleteButton.onclick = () => {
        taskList.removeChild(li);
      };
  
      li.appendChild(deleteButton);
      li.onclick = () => {
        li.classList.toggle('completed');
      };
  
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
