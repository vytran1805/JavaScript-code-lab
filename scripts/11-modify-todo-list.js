const todoList = [
  // {
  //   name: "make dinner",
  //   dueDate: "2022-12-22",
  // },
  // {
  //   name: "wash dishes",
  //   dueDate: "2022-12-22",
  // },
];
renderTodoList();
/***
 * Display the whole list
 */
function renderTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    const { name } = todoObj;
    const { dueDate } = todoObj;
    const html = `
      <p>
        ${name} ${dueDate}
        <button onclick="todoList.splice(${i},1); renderTodoList()">
          Delete
        </button>
      </p>`;
    todoListHtml += html;
    // console.log(html);
  }
  document.querySelector(".js-list-display").innerHTML = todoListHtml;
}
/***
 * Display the list on browser, below the input field
 */
function addTodoList() {
  const listInput = document.querySelector(".js-name-input");
  const dateInput = document.querySelector(".js-date-input");
  const name = listInput.value;
  const dueDate = dateInput.value;
  // add an object
  todoList.push({ name: name, dueDate: dueDate });
  listInput.value = "";
  renderTodoList();
  listInput.value = "";
}
