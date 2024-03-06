const { TaskManager } = require('my-task-management-api');
const readline = require('readline');

const taskManager = new TaskManager();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayTasks() {
  const tasks = taskManager.tasks;
  console.log('Task List:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

function addTask() {
  rl.question('Enter the task name: ', (taskName) => {
    taskManager.addTask(taskName);
    console.log(`Task "${taskName}" added successfully.`);
    displayTasks();
    mainMenu();
  });
}

function removeTask() {
  displayTasks();
  rl.question('Enter the index of the task to remove: ', (index) => {
    index = parseInt(index);
    if (isNaN(index) || index < 1 || index > taskManager.tasks.length) {
      console.log('Please enter a valid task index.');
      removeTask();
      return;
    }
    const removedTask = taskManager.removeTask(index - 1);
    console.log(`Task "${removedTask}" removed successfully.`);
    displayTasks();
    mainMenu();
  });
}

function mainMenu() {
  console.log('Menu:');
  console.log('1. Add Task');
  console.log('2. Remove Task');
  console.log('3. Exit');
  rl.question('Select an option: ', (choice) => {
    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        removeTask();
        break;
      case '3':
        console.log('Thank you! Goodbye.');
        rl.close();
        break;
      default:
        console.log('Invalid option.');
        mainMenu();
        break;
    }
  });
}

mainMenu();
