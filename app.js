const STORAGE_KEY = 'todo-app-items';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');
const clearCompletedButton = document.getElementById('clear-completed');
const emptyState = document.getElementById('empty-state');
const filterButtons = document.querySelectorAll('.filter');

let tasks = loadTasks();
let currentFilter = 'all';

function createTaskId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (task) => task && typeof task.id === 'string' && typeof task.text === 'string',
    );
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function getVisibleTasks() {
  if (currentFilter === 'active') {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === 'completed') {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function updateCount() {
  const remaining = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${remaining} task${remaining === 1 ? '' : 's'} left`;
}

function setFilter(nextFilter) {
  currentFilter = nextFilter;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === nextFilter;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });
  renderTasks();
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = `todo-item${task.completed ? ' completed' : ''}`;
  li.dataset.id = task.id;

  const label = document.createElement('label');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.setAttribute('aria-label', `Mark ${task.text} complete`);
  checkbox.addEventListener('change', () => toggleTask(task.id));

  const text = document.createElement('span');
  text.textContent = task.text;
  text.title = 'Double-click to edit';
  text.addEventListener('dblclick', () => startEditingTask(task.id, text));

  label.append(checkbox, text);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => removeTask(task.id));

  li.append(label, deleteButton);
  return li;
}

function renderTasks() {
  todoList.innerHTML = '';

  const visibleTasks = getVisibleTasks();
  visibleTasks.forEach((task) => {
    todoList.appendChild(createTaskElement(task));
  });

  emptyState.hidden = tasks.length !== 0;

  updateCount();
  saveTasks();
}

function addTask(text) {
  tasks.unshift({
    id: createTaskId(),
    text,
    completed: false,
  });

  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );
  renderTasks();
}

function updateTaskText(id, nextText) {
  tasks = tasks.map((task) => (task.id === id ? { ...task, text: nextText } : task));
  renderTasks();
}

function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  renderTasks();
}

function startEditingTask(id, textElement) {
  const originalText = textElement.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'edit-input';
  input.value = originalText;
  input.maxLength = 140;

  const finishEditing = (commit) => {
    const nextValue = input.value.trim();

    if (commit && nextValue) {
      updateTaskText(id, nextValue);
    } else {
      renderTasks();
    }
  };

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      finishEditing(true);
    }

    if (event.key === 'Escape') {
      finishEditing(false);
    }
  });

  input.addEventListener('blur', () => finishEditing(true));

  textElement.replaceWith(input);
  input.focus();
  input.select();
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = todoInput.value.trim();

  if (!value) {
    return;
  }

  addTask(value);
  todoInput.value = '';
  todoInput.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setFilter(button.dataset.filter);
  });
});

clearCompletedButton.addEventListener('click', clearCompleted);

setFilter('all');
