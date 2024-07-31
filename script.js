const inputText = document.querySelector("#input-text");
const btnCreate = document.querySelector("#btn-create");
let newTodo = document.querySelector("#newTodo");
let newProgress = document.querySelector("#newProgress");
let newClosed = document.querySelector("#newClosed");
let progress = document.querySelector("#progress");
let closed = document.querySelector("#closed");
const todoNum = document.querySelector("#todoNum");
const progressNum = document.querySelector("#progressNum");
const closedNum = document.querySelector("#closedNum");
let drag;
let todoArr = JSON.parse(localStorage.getItem("todo_item")) || [];
let progressArr = JSON.parse(localStorage.getItem("progress_item")) || [];
let closedArr = JSON.parse(localStorage.getItem("closed_item")) || [];

function display() {
  newTodo.innerHTML = ``;
  for (let index = 0; index < todoArr.length; index++) {
    newTodo.innerHTML += `
      <div
        class="draggable border shadow-[0_10px_10px_#a0aec0] p-2 py-5 my-4 rounded-lg flex justify-between items-center"
        draggable="true"
        id="todo-${index}"
      >
        <span>${todoArr[index]}</span>
        <button onClick="delete_(${index})" class="text-gray-600" id="btn-delete">
          <svg
            class="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    `;
  }
  let draggable = document.querySelectorAll(".draggable");
  draggable.forEach(element => {
    element.addEventListener('dragstart', (event) => {
      drag = element;
      event.dataTransfer.setData('text/plain', event.target.id);
    });
  });
  todoNum.textContent = todoArr.length;
}

function addTodo() {
  const inputValue = inputText.value;
  if (inputValue) {
    todoArr.push(inputValue);
    localStorage.setItem("todo_item", JSON.stringify(todoArr));
    display();
    inputText.value = "";
  }
}

function delete_(index) {
  todoArr.splice(index, 1);
  localStorage.setItem("todo_item", JSON.stringify(todoArr));
  display();
}

function displayProgress() {
  progress.innerHTML = `<div
  class="bg-purple-500 text-white rounded-lg px-4 py-5 flex justify-between"
  >
  <span>IN PROGRESS</span>
  <span class="bg-white text-purple-700 rounded-full px-2" id="progressNum">${progressArr.length}</span>
  </div>`;
  for (let index = 0; index < progressArr.length; index++) {
    progress.innerHTML += `
    <div
    class="draggable border shadow-[0_10px_10px_#a0aec0] p-2 py-5 my-4 rounded-lg flex justify-between items-center item" draggable="true"
    id="progress-${index}"
    >
    <span>${progressArr[index]}</span>
    <button onClick="delete_Progress(${index})" class="text-gray-600" id="btn-delete">
    <svg
    class="h-8 w-8 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
    </svg>
    </button>
    </div>
    `;
  }
  let draggable = document.querySelectorAll(".draggable");
  draggable.forEach(element => {
    element.addEventListener('dragstart', (event) => {
      drag = element;
      event.dataTransfer.setData('text/plain', event.target.id);
    });
  });
  progressNum.textContent = progressArr.length;
}

function delete_Progress(index){
  progressArr.splice(index, 1);
  localStorage.setItem("progress_item", JSON.stringify(progressArr));
  displayProgress();
}

function displayClosed() {
  newClosed.innerHTML = ``;
  for (let index = 0; index < closedArr.length; index++) {
    newClosed.innerHTML += `
      <div
        class="draggable border shadow-[0_10px_10px_#a0aec0] p-2 py-5 my-4 rounded-lg flex justify-between items-center item"
        draggable="true"
        id="closed-${index}"
      >
        <span>${closedArr[index]}</span>
        <button onClick="delete_Closed(${index})" class="text-gray-600" id="btn-delete">
          <svg
            class="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    `;
  }
  let draggable = document.querySelectorAll(".draggable");
  draggable.forEach(element => {
    element.addEventListener('dragstart', (event) => {
      drag = element;
      event.dataTransfer.setData('text/plain', event.target.id);
    });
  });
  closedNum.textContent = closedArr.length;
}

function delete_Closed(index){
  closedArr.splice(index, 1);
  localStorage.setItem("closed_item", JSON.stringify(closedArr));
  displayClosed();
}
function transfar_Closed(index){
  closedArr.splice(index, 1);
  localStorage.setItem("closed_item", JSON.stringify(closedArr));
}

progress.addEventListener('dragover', (event) => {
  event.preventDefault();
});

progress.addEventListener('dragleave', (event) => {});

// progress.addEventListener('drop', (event) => {
//   event.preventDefault();
//   const data = event.dataTransfer.getData('text/plain');
//   const draggedElement = document.getElementById(data);

//   if (draggedElement) {
//     const textContent = draggedElement.querySelector('span').textContent;
//     progressArr.push(textContent);
//     todoArr = todoArr.filter(item => item !== textContent);
//     localStorage.setItem('progress_item', JSON.stringify(progressArr));
//     localStorage.setItem('todo_item', JSON.stringify(todoArr));
//     draggedElement.parentElement.removeChild(draggedElement);
//     display();
//     displayProgress();
//   }
// });

closed.addEventListener('dragover', (event) => {
  event.preventDefault();
});

closed.addEventListener('dragleave', (event) => {});

// closed.addEventListener('drop', (event) => {
//   event.preventDefault();
//   const data = event.dataTransfer.getData('text/plain');
//   const draggedElement = document.getElementById(data);

//   if (draggedElement) {
//     const textContent = draggedElement.querySelector('span').textContent;
//     closedArr.push(textContent);
//     progressArr = progressArr.filter(item => item !== textContent);
//     localStorage.setItem('closed_item', JSON.stringify(closedArr));
//     localStorage.setItem('progress_item', JSON.stringify(progressArr));
//     draggedElement.parentElement.removeChild(draggedElement);
//     displayProgress();
//     displayClosed();
//   }
// });

progress.addEventListener('drop', (event) => {
  event.preventDefault(); 
  const data = event.dataTransfer.getData('text/plain'); 
  const draggedElement = document.getElementById(data);

  if (draggedElement) {
    const textContent = draggedElement.querySelector('span').textContent;
    progressArr.push(textContent);

    // Remove the item from the appropriate array
    if (draggedElement.id.startsWith('todo')) {
      todoArr = todoArr.filter(item => item !== textContent);
      localStorage.setItem('todo_item', JSON.stringify(todoArr));
    } else if (draggedElement.id.startsWith('closed')) {
      closedArr = closedArr.filter(item => item !== textContent);
      localStorage.setItem('closed_item', JSON.stringify(closedArr));
    }

    localStorage.setItem('progress_item', JSON.stringify(progressArr));
    draggedElement.parentElement.removeChild(draggedElement);
    display();
    displayProgress();
    displayClosed();
  }
});

closed.addEventListener('drop', (event) => {
  event.preventDefault(); 
  const data = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);

  if (draggedElement) {
    const textContent = draggedElement.querySelector('span').textContent;
    closedArr.push(textContent);

    // Remove the item from the appropriate array
    if (draggedElement.id.startsWith('progress')) {
      progressArr = progressArr.filter(item => item !== textContent);
      localStorage.setItem('progress_item', JSON.stringify(progressArr));
    } else if (draggedElement.id.startsWith('todo')) {
      todoArr = todoArr.filter(item => item !== textContent);
      localStorage.setItem('todo_item', JSON.stringify(todoArr));
    }

    localStorage.setItem('closed_item', JSON.stringify(closedArr));
    draggedElement.parentElement.removeChild(draggedElement);
    display();
    displayProgress();
    displayClosed();
  }
});

newTodo.addEventListener('drop', (event) => {
  event.preventDefault(); 
  const data = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);

  if (draggedElement) {
    const textContent = draggedElement.querySelector('span').textContent;
    todoArr.push(textContent);

    // Remove the item from the appropriate array
    if (draggedElement.id.startsWith('progress')) {
      progressArr = progressArr.filter(item => item !== textContent);
      localStorage.setItem('progress_item', JSON.stringify(progressArr));
    } else if (draggedElement.id.startsWith('closed')) {
      closedArr = closedArr.filter(item => item !== textContent);
      localStorage.setItem('closed_item', JSON.stringify(closedArr));
    }

    localStorage.setItem('todo_item', JSON.stringify(todoArr));
    draggedElement.parentElement.removeChild(draggedElement);
    display();
    displayProgress();
    displayClosed();
  }
});


btnCreate.addEventListener("click", addTodo);

display();
displayProgress();
displayClosed();
