document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const taskText = taskInput.value.trim();
    const dueDate = dateInput.value;

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        newTask.textContent = taskText;

        if (dueDate) {
            newTask.textContent += ` (Fecha: ${new Date(dueDate).toLocaleDateString()})`;
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        taskInput.value = '';
        dateInput.value = '';
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});