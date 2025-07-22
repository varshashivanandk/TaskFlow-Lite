const TASKS_KEY = 'taskflow_tasks';

export function loadTasks() {
  return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
}

export function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
