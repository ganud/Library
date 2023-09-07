
const book1 = new Book("Joe's Wonderland", "Borgs", 200, true)
const book2 = new Book("Bob's Wonderland", "Borgs", 200, true)
const book4 = new Book("Jim's Wonderland", "Borgs", 200, true)

const mainContent = document.querySelector('.main-content')
const myLibrary = [book1, book2, book4];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  // the constructor...
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


// For each book in myLibrary do something

