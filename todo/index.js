const form = document.querySelector("#form");
const todosWrapper = document.querySelector("#todos");
form.addEventListener("submit", addTodo);
let todos = [];
function addTodo(e) {
  e.preventDefault();
  const { todo } = Object.fromEntries(new FormData(e.target));
  console.log("🚀 ~ file: index.js:8 ~ todo:", todo);
  // const newTodo = document.createElement("div");

  // const spanTodo = document.createElement("span");
  // spanTodo.textContent = todo;

  // const btnTodo = document.createElement("button");
  // btnTodo.textContent = "Delete";
  // newTodo.appendChild(spanTodo);
  // newTodo.appendChild(btnTodo);
  const newId = 1000 + Math.ceil(Math.random() * 1000);
  todos.push({
    id: newId,
    todo,
  });

  const newTodo = document.createElement("div");

  newTodo.innerHTML = `
    <div id="${newId}">
    <label>${todo}</label>
    <button class="delete-btn">Delete</button>
    </div>
    `;
  todosWrapper.appendChild(newTodo);

  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log("la e", e);
      const parent = e.target.parentElement;
      parent.remove();
    });
  });
}
function initAll() {
  console.log("this is loadingright=");
}
initAll();
