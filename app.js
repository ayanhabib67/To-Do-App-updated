
let input = document.getElementById("input")
let ul = document.getElementById("ul")


let arr = []

function enterTodo(){

ul.innerHTML =""

for (let i = 0; i < arr.length; i++) {

      ul.innerHTML += `<li>${arr[i]}
      <button type="button" class="btn btn-danger" onClick="deleteTodo(${i})">Delete</button>
      <button  type="button" class="btn btn-primary" onClick="editTodo(${i})">edit</button></li>`
}

}


function AddTodo(){

  arr.push( input.value)
input.value =""
  enterTodo()
} 



function deleteTodo(index) {
      console.log("delete todo", index);
    arr.splice(index, 1);
    enterTodo();

  }
function editTodo(index){
  console.log("edit todo", index);

  let updatedVal = prompt("enter updated value");

  arr[index] = updatedVal;

  arr.splice(index, 1, updatedVal);
  enterTodo();

}
