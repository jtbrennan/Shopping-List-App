
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


// Book Code
let items = [];

class Book {
  constructor(name, catagory) {
    this.name = name;
    this.catagory = catagory;
  }
}

function addItemToList(name, catagory) {
  const newBook = new Book(name, catagory);
  items.push(newBook);
  displayList();
}

function displayList() {
  
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  
  items.forEach((book) => {
    cell1.innerHTML = book.name;
    cell2.innerHTML = book.catagory;
  })
}


function send() {
  var nameValue = document.getElementById("uname").value;
  var catagoryValue = document.getElementById("ucatagory").value;
  
  addItemToList(nameValue, catagoryValue)
}


function removeItem() {
  var table = document.getElementById("myTable");
  table.deleteRow(1); 
}



