const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const example = document.querySelector("#example");


eventListeners();

function eventListeners() {
  // Submit Event
  form.addEventListener("submit", addNewİtem);
  // Delete an Item
  taskList.addEventListener("click", deleteItem);
  // Delete All Items
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function addNewİtem(e) {
  if (input.value === "") {
    alert("Invalid Transaction!");
    return;
  }

  // create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value));

  // create a
  var a = document.createElement("a");
  a.classList = "delete-item float-right btn btn-danger";
  a.setAttribute("href", "#");
  a.innerHTML = '&#10006 <i class="fas fa-times"></i>';

  // add a to li
  li.appendChild(a);

  // add li to ul
  taskList.appendChild(li);

  // Clear input
  input.value = "";

  console.log(li);
  e.preventDefault();
  example.remove();
}

// Delete an Item
function deleteItem(e) {
  if (e.target.className === "delete-item float-right btn btn-danger") {
    e.target.parentElement.remove();
    console.log(e.target.parentElement);
  }
  e.preventDefault();
}

// Delete All Items
function deleteAllItems(e) {
  if(confirm('Are you sure you want to delete them all?')){
    taskList.innerHTML='';
  }
  e.preventDefault();
}
