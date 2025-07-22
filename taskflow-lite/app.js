import { loadTasks, saveTasks } from './modules/storage.js';
import { renderTaskList } from './modules/render.js';
import { validateTaskInput } from './modules/validation.js';

let tasks = loadTasks();

const form = document.getElementById('task-form');
const list = document.getElementById('task-list');

// render initial tasks
renderTaskList(list, tasks);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('task-input').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  const tags = document.getElementById('tags').value;

  if (validateTaskInput(title, priority)) {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      dueDate,
      priority,
      tags: tags.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTaskList(list, tasks);
    form.reset();
  }
});

list.addEventListener('click', (e) => {
  const taskElement = e.target.closest('.task');
  if (!taskElement) return;

  const taskId = Number(taskElement.dataset.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  // DELETE
  if (e.target.classList.contains('delete-btn')) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      tasks.splice(taskIndex, 1);
      saveTasks(tasks);
      renderTaskList(list, tasks);
    }
  }

  // CHECK/UNCHECK
  if (e.target.classList.contains('complete-checkbox')) {
    tasks[taskIndex].completed = e.target.checked;
    saveTasks(tasks);
    renderTaskList(list, tasks);
  }

 // EDIT
if (e.target.classList.contains('edit-btn')) {
  // Hide view mode
  taskElement.querySelector('.view-title').style.display = 'none';
  taskElement.querySelector('.view-desc').style.display = 'none';
  taskElement.querySelector('.view-meta').style.display = 'none';
  taskElement.querySelector('.view-tags').style.display = 'none';

  // Show input fields
  taskElement.querySelectorAll('.edit-input, .edit-meta').forEach(el => {
    el.style.display = 'block';
  });

  e.target.style.display = 'none';
  taskElement.querySelector('.save-btn').style.display = 'inline-block';
}

 // SAVE
if (e.target.classList.contains('save-btn')) {
  const newTitle = taskElement.querySelector('.task-title').value.trim();
  const newDesc = taskElement.querySelector('.task-description').value.trim();
  const newDate = taskElement.querySelector('.task-due-date').value;
  const newPriority = taskElement.querySelector('.task-priority').value;
  const newTags = taskElement.querySelector('.task-tags').value.trim();

  if (!newTitle) {
    alert("Title cannot be empty.");
    return;
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: newTitle,
    description: newDesc,
    dueDate: newDate,
    priority: newPriority,
    tags: newTags
  };

  saveTasks(tasks);
  renderTaskList(list, tasks);
}
});

const modeToggle = document.getElementById("modeToggle");
const icon = modeToggle.querySelector(".icon");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  icon.textContent = "☀️";
}

// Toggle theme on click
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  icon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
