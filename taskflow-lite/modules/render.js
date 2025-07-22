export function renderTaskList(container, tasks) {
  container.innerHTML = '';

  if (tasks.length === 0) {
    container.innerHTML = `<li class="empty-state">No tasks yet. Add one!</li>`;
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `task ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} class="complete-checkbox" />

      <div class="task-content">
        <!-- TITLE -->
        <h3 class="view-title" style="${task.completed ? 'text-decoration: line-through;' : ''}">
          ${task.title}
        </h3>
        
       <p class="task-id"><strong>Task #${index + 1}</strong></p>


        <input type="text" class="edit-input task-title" placeholder="Enter task title" value="${task.title}" style="display: none; margin-bottom: 6px;" />

        <!-- DESCRIPTION -->
        <p class="view-desc">${task.description || ''}</p>
        <textarea class="edit-input task-description" placeholder="Enter task description" style="display: none; margin-bottom: 6px;">${task.description || ''}</textarea>

        <!-- DUE DATE + PRIORITY -->
        <small class="view-meta">Due: ${task.dueDate || 'N/A'} | Priority: ${task.priority}</small>
        <div class="edit-meta" style="display: none; margin-bottom: 6px;">
          <input type="date" class="edit-input task-due-date" value="${task.dueDate || ''}" style="margin-bottom: 6px;" />
          <select class="edit-input task-priority" style="margin-bottom: 6px;">
            <option disabled>Select priority</option>
            <option ${task.priority === 'Low' ? 'selected' : ''}>Low</option>
            <option ${task.priority === 'Medium' ? 'selected' : ''}>Medium</option>
            <option ${task.priority === 'High' ? 'selected' : ''}>High</option>
          </select>
        </div>

        <!-- TAGS -->
        <p class="view-tags"><em>Tags: ${task.tags || 'None'}</em></p>
        <input type="text" class="edit-input task-tags" placeholder="Enter tags (comma separated)" value="${task.tags || ''}" style="display: none; margin-bottom: 6px;" />
      </div>

      <div class="task-actions">
        <button class="edit-btn">✏️</button>
        <button class="save-btn" style="display:none;">💾</button>&nbsp;
        <button class="delete-btn">🗑</button>
      </div>
    `;

    container.appendChild(li);
  });
}
