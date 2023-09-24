const mainContent = document.querySelector('.main-content')
const myLibrary = [];

// Book Constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
}


function populateLibrary() {
  mainContent.innerHTML = "";
  myLibrary.forEach((book, index) => {
    let div = document.createElement('div');
    div.classList.add("book-item");
    let itemContainer = document.createElement('div');
    div.appendChild(itemContainer);
    
    // Creates a book item.
    // Button indicates read if user selected the checkbox.
    if (book.read == "yes") {
      div.innerHTML = `<div class="item-container">
      <div>
      Title: ${book.title}<br/>Author: ${book.author}<br/>Pages: ${book.pages}
      </div>
      <button onclick="toggleRead(this)" style="color:#008000">Read</button>
      <button class="remove-button" value="${index}" onclick="removeBook(this)">Remove</button>
  </div>`;
    }
    else {
      div.innerHTML = `<div class="item-container">
      <div>
      Title: ${book.title}<br/>Author: ${book.author}<br/>Pages: ${book.pages}
      </div>
      <button onclick="toggleRead(this)" style="color:red">Unread</button>
      <button class="remove-button" value="${index}" onclick="removeBook(this)">Remove</button>
  </div>`;
    }

    mainContent.appendChild(div);
  });
}

function appendBook(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  populateLibrary();
}
// Code taken from w3schools
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("bookAdder");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("modal-form").addEventListener("submit", function (e) {
  e.preventDefault();
  modal.style.display = "none";
});
// Code taken from w3schools


let formInputs = []
const form = document.querySelector('form')
// Take form input on submit
form.addEventListener('submit', (e) => {
  formInputs = []
  e.preventDefault();
  // Extract user input
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    formInputs.push(pair[1]);
  }
  console.log(formInputs)
  // Parse form input data into Library, then clear everything
  appendBook(formInputs[0],formInputs[1],formInputs[2],formInputs[3]);
  var allInputs = document.querySelectorAll('input');
  allInputs.forEach(singleInput => singleInput.value = '');

  // This reverts accidently removing the checkbox value
  allInputs[3].value = "yes";
})

function removeBook(e) {
  let index = e.value;
  myLibrary.splice(index, 1);
  mainContent.innerHTML = "";
  populateLibrary();
}

function toggleRead(e) {
  if (e.innerHTML == "Unread") {
    e.innerHTML = "Read";
    e.style.color = "#008000";
  }
  else {
    e.innerHTML = "Unread";
    e.style.color = "red";
  }
}
