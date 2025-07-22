export function validateTaskInput(title, priority) {
  if (!title.trim()) {
    alert("Task title is required.");
    return false;
  }
  if (!priority) {
    alert("Priority is required.");
    return false;
  }
  return true;
}
