# My Task Manager

My Task Manager is a simple task management library for Node.js, allowing you to manage tasks easily.

## Installation

You can install My Task Manager via npm:

```bash
npm install my-task-manager
```
## Usage
Here is an example of how to use My Task Manager:
```javascript
const { TaskManager } = require('my-task-manager');

// Initialize Task Manager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask('Task 1');
taskManager.addTask('Task 2');

// Get all tasks
const tasks = taskManager.getAllTasks();
console.log('Tasks:', tasks);

// Remove a task
const removedTask = taskManager.removeTask(0);
console.log('Removed Task:', removedTask);

// Get remaining tasks
const remainingTasks = taskManager.getAllTasks();
console.log('Remaining Tasks:', remainingTasks);
```
## API
- TaskManager
  addTask(task: string): void
  Adds a new task to the task manager.
- task: The task to add.
  getAllTasks(): string[]
  Returns an array of all tasks in the task manager.
- removeTask(index: number): string | null
  Removes the task at the specified index and returns the removed task. Returns null if the index is out of bounds.
- index: The index of the task to remove.
- 
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

