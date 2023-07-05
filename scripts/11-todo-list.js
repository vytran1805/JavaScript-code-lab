const todoList = [];
renderTodoList();
/***
 * Display the whole list 2
 */
function renderTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    // const todo = todoList[i];
    const html = `<p>${todoList[i]}</p>`;
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
  const listValue = listInput.value;
  todoList.push(listValue);
  listInput.value = "";
  renderTodoList();
  listInput.value = "";
}

/***
 * Find the minimum number and maximum number of an array
 */
const myArray = [-3, 2, 14, -6];
let min = myArray[0];
let max = myArray[0];

for (let i = 0; i < myArray.length; i++) {
  if (min > myArray[i]) {
    min = myArray[i];
  }
}
for (let i = 0; i < myArray.length; i++) {
  if (max < myArray[i]) {
    max = myArray[i];
  }
}
console.log(min);
console.log(max);

/**
 * Count how many times each string appeared in an array
 */
const anotherArray = ["apple", "grape", "apple", "apple"];
let counts = {};
for (let str of anotherArray) {
  //   let str = anotherArray[i];
  console.log(str);
  counts[str] = (counts[str] || 0) + 1;
}

console.log(counts);
