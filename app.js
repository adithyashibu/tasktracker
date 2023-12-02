// app.js
document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;

        if (taskName && dueDate) {
            addTask(taskName, dueDate);
            taskForm.reset();
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            toggleTaskStatus(e.target);
        }
    });

    function addTask(name, dueDate) {
        const li = document.createElement('li');
        li.textContent = `${name} - Due: ${dueDate}`;
        taskList.appendChild(li);
    }

    function toggleTaskStatus(li) {
        li.classList.toggle('completed');
    }
});
