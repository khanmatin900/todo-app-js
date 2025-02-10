document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });

    taskList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentElement;
        taskList.removeChild(li);
      } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
      }
    });

    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    }
  });
