# ✅ Taskflow Lite

**Taskflow Lite** is a lightweight, responsive task manager built using HTML, CSS, and vanilla JavaScript. It allows users to create, edit, delete, and manage tasks with full support for tags, due dates, and priorities. Data is stored in the browser using LocalStorage, so tasks persist across sessions.

---

## 🚀 Features

- 📌 Add, edit, delete, and mark tasks as complete
- 🏷️ Support for tags and priority levels
- 🗓️ Due date selection
- 🌗 Theme toggle (Light/Dark mode)
- 📱 Mobile-friendly layout
- 💾 Persistent storage via LocalStorage
-  - Favicon Added
-  - Deployed on Netlify

---

## 🏗️ Architecture Decisions

### 1. **Frontend Only**
- Built with HTML, CSS, and JavaScript.
- No backend or server required, perfect for personal use or static hosting.

### 2. **Modular JavaScript**
- Code split across logical modules:
  - `storage.js` – handles reading/writing tasks in LocalStorage.
  - `render.js` – renders tasks to the DOM.
  - `validation.js` – ensures task input validity before submission.

### 3. **Responsive UI**
- Designed with CSS media queries.

---

## 💾 LocalStorage Schema

**Key:** `tasks`

Stored as a JSON array of objects:

```json
[
  {
    "id": "task123",
    "title": "Finish OS assignment",
    "description": "Due by 8 PM tonight",
    "dueDate": "2025-07-22",
    "priority": "High",
    "tags": ["college", "urgent"],
    "completed": false
  }
]
```

### 📋 Task Object Fields

- **`id`**: Unique identifier for the task (e.g., `"task123"`)
- **`title`**: Short name or heading for the task (e.g., `"Buy groceries"`)
- **`description`**: Optional detailed notes about the task
- **`dueDate`**: Deadline in `YYYY-MM-DD` format (e.g., `"2025-07-22"`)
- **`priority`**: One of `"Low"`, `"Medium"`, or `"High"`
- **`tags`**: Array of strings to categorize tasks (e.g., `["home", "personal"]`)
- **`completed`**: Boolean value indicating whether the task is done (`true` or `false`)

### 🔄 Event Flow Diagram

#### 📝 Task Creation Flow

[User submits the form]
↓
validateTaskInput()
↓
Create task object
↓
saveTasks(tasks)
↓
renderTaskList(tasks)
↓
[Task appears in the UI]


#### 🧑‍💻 User Actions

- **Edit Task**
→ Click "Edit"
→ Prefill form with task details
→ Submit updates
→ saveTasks(tasks)
→ renderTaskList(tasks)


- **Delete Task**
→ Click "Delete"
→ Show confirmation
→ Remove task from list
→ saveTasks(tasks)
→ renderTaskList(tasks)


- **Complete Task**
→ Click "Mark Complete"
→ Toggle task.completed = true/false
→ saveTasks(tasks)
→ renderTaskList(tasks)

## 📱 Mobile Optimization

- 🎚️ Theme toggle button shown at the top-right corner
- 📦 Task cards stack vertically
- 🎨 Text colors adapt automatically for light/dark mode

---

## 🌱 Future Enhancements

- 🔍 Search and filter by tags or priority  
- 📅 Calendar view of due tasks  
- 📤 Export/Import tasks as JSON  
- 🔄 Sync to cloud (Firebase, Supabase)  
- 🔐 Multi-user support and login  

---

## 🛠️ Tech Stack

| Technology           | Purpose                        |
|----------------------|--------------------------------|
| **HTML5**            | Page structure                 |
| **CSS3**             | Responsive and theme styling   |
| **JS (Modules)**     | App logic                      |
| **LocalStorage API** | Data persistence               |

