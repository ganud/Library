
const book1 = new Book("Joe's Wonderland", "Borgs", 200, true)
const book2 = new Book("Bob's Wonderland", "Borgs", 200, true)
const book4 = new Book("Jim's Wonderland", "Borgs", 200, true)
const mainContent = document.querySelector('.main-content')
const myLibrary = [book1, book2, book4];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function populateLibrary() {
  mainContent.innerHTML = "";
  myLibrary.forEach((book) => {
    let div = document.createElement('div');
    div.classList.add("book-item");
    div.innerHTML = `Title: ${book.title}<br/>Author: ${book.author}<br/>Pages: ${book.pages}<br/>Read: ${book.read}`;
    mainContent.appendChild(div);
  });
}

function appendBook(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  populateLibrary();
}

populateLibrary();

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

let formInputs = []
// Take form input on submit
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  formInputs = []
  e.preventDefault();
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    formInputs.push(pair[1]);
  }

  // Parse form input data into new object
  appendBook(formInputs[0],formInputs[1],formInputs[2],formInputs[3]);
  
})

