// const  inputText =document.querySelector("#input-text");
// const  btnCreate =document.querySelector("#btn-create");
// const  btnDelete =document.querySelector("#btn-delete");
// let  newTodo =document.querySelector("#todo");
// let todoArr;
// let inputValue ;
// let globalStorage;
// todoArr =JSON.parse(localStorage.getItem('newTask'));
// for (let index = 0; index < 5; index++) {
// if(localStorage.getItem('newTask') != null){
//     // addTodo(todoArr[index]);
//     display();
//     // console.log(todoArr[index]);

//   }else{
//     todoArr=[];
//   }
// }
// btnCreate.addEventListener('click',function(){
//     inputValue =inputText.value;

//   // todoArr.push(inputValue);

//   // localStorage.setItem('newTask',JSON.stringify(todoArr));
//   // addTodo(inputValue);
//   display(inputValue)
//   // console.log("ddddddddddddddddddddddd");
// })

// function addTodo(inputValue){

// }

// function display(inputValue){
//   for (let index = 0; index < todoArr.length; index++) {

//     newTodo.innerHTML +=`
//   <div
//               class="border shadow-[0_10px_10px_#a0aec0] p-2 py-5 my-4 rounded-lg flex justify-between items-center"
//             >
//               <span>${inputValue}</span>
//               <button onClick="delete_()" class="text-gray-600" id="btn-delete">
//                 <svg
//                   class="h-8 w-8 text-gray-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </button>
//             </div>

//   `
//   }
// }

// //delete
// // console.log(btnDelete);
// function delete_(index){
// todoArr.splice(index,1);
// // addTodo();
// todoArr=JSON.parse(localStorage.getItem('newTask'));
// for (let index = 0; index < todoArr.length; index++) {
//   if(localStorage.getItem('newTask') != null){
//       addTodo(todoArr[index]);
//       // console.log(todoArr[index]);
//     }
//   }
// console.log("delete");
// }

const inputText = document.querySelector("#input-text");
const btnCreate = document.querySelector("#btn-create");
const btnDelete = document.querySelector("#btn-delete");
let newTodo = document.querySelector("#newTodo");
let newProgress = document.querySelector("#newProgress");
let progress = document.querySelector("#progress");
const todoNum = document.querySelector("#todoNum");
let progressNum = document.querySelector("#progressNum");
const closedNum = document.querySelector("#closedNum");
let draggable;
let drag;
let todoArr = JSON.parse(localStorage.getItem("todo_item")) || [];
let progressArr = JSON.parse(localStorage.getItem("progress_item")) || [];
let closedArr = JSON.parse(localStorage.getItem("closed_item")) || [];




display();
function display() {
  newTodo.innerHTML = ``;
  for (let index = 0; index < todoArr.length; index++) {
    newTodo.innerHTML += `
  <div
      class=" draggable border shadow-[0_10px_10px_#a0aec0] p-2 py-5 my-4 rounded-lg flex justify-between items-center"
      draggable="true"

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
draggable = document.querySelectorAll(".draggable")
// console.log(draggable);
todoNum.textContent = todoArr.length;
// dragItem();
}




draggable.forEach(element => {
  element.addEventListener('dragstart', (event) => {
    drag=element;
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log(event.dataTransfer);
    console.log(event);
    // element.style.opacity = '0.5';  
    console.log(element);
    });
    progress.addEventListener('dragover', (event) => {
      event.preventDefault();
      // progress.style.backgroundColor = '#2ecc71';
  });
  progress.addEventListener('dragleave', (event) => {
    // progress.style.backgroundColor = '#ccc';
});

progress.addEventListener('drop', (event) => {
  event.preventDefault();
  // progress.style.backgroundColor = '#eee';

  const data = event.dataTransfer.getData('text/plain');
  // const draggedElement = document.getElementById(data);
  
  progress.appendChild(drag);
  progressArr.push(JSON.parse(localStorage.getItem("todo_item")))
  localStorage.setItem('progress_item',JSON.stringify(...progressArr||[]))
  // displayProgress();
  console.log(drag);
  console.log(progressArr);
});

  
});



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





//progress
displayProgress();
function displayProgress() {
  newProgress.innerHTML = ``;
  for (let index = 0; index < progressArr.length; index++) {
    newProgress.innerHTML += `
  <div
      class="border shadow-[0_10px_10px_#a0aec0] p-2 py-5 my-4 rounded-lg flex justify-between items-center item"
    >
      <span>${progressArr[index]}</span>
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
  progressNum.textContent = progressArr.length;
}
displayClosed();
function displayClosed() {
  newProgress.innerHTML = ``;
  for (let index = 0; index < progressArr.length; index++) {
    newProgress.innerHTML += `
  <div
      class="border shadow-[0_10px_10px_#a0aec0] p-2 py-5 my-4 rounded-lg flex justify-between items-center item"
    >
      <span>${closedArr[index]}</span>
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
  closedNum.textContent = closedArr.length;
}





















//drag

// function dragItem(){
//   let items = document.querySelectorAll('.item');
//   items.forEach(item => {
//       item.addEventListener('dragstart',function(){
//           drag = item ;
//           item.style.opacity = '0.5';
//       })
//       item.addEventListener('dragend',function(){
//           drag = null; 
//           item.style.opacity = '1';

//       })
//       boxs.forEach(box => {
//           box.addEventListener('dragover',function(e){
//               e.preventDefault();
//               this.style.background = '#fff';
//               this.style.color = '#000';
//           })
//           box.addEventListener('dragleave', function(){
//               this.style.background ='#fff';
//               this.addEventListener ='#000';
//           })
//           box.addEventListener('drop',function(){
//               this.append(drag);
//               this.style.background = '#fff';
//               this.style.color = '#000';
//           })
//       });
//   });
// }



