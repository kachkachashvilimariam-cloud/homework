const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const clearCompletedBtn = document.querySelector("#clear-completed");

let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("localStorage-დან წაკითხვის შეცდომა:", error);
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    (console, error("localStorage-ში შენაცვის შეცდომა:", error));
  }
}

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.classList.add("toggle-checkbox");
    checkbox.dataset.index = index;

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add("done"); // გადახაზვისთვის
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "წაშლა";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.dataset.index = index;

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push({ text: taskText, completed: false });
  saveTasks();
  renderTasks();

  input.value = "";
});

list.addEventListener("click", (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("delete-btn")) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

  if (e.target.classList.contains("toggle-checkbox")) {
    tasks[index].completed = e.target.checked;
    saveTasks();
    renderTasks();
  }
});

clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

renderTasks();
