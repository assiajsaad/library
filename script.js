const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, Read : ${this.isRead}`;
  };
}

function showBooks() {
    let content = document.querySelector('.content');
    let card = document.createElement('div');
    card.className = 'card';
    let cardText = document.createElement('div');
    cardText.className = 'card-text';
    let delBtn = document.createElement('button');
    delBtn.className = 'btn-delete';
    delBtn.textContent = "Delete Item";

    
    
    

  myLibrary.map((book, index) => {
    cardText.textContent = book.info();
    
    card.appendChild(cardText)
    card.appendChild(delBtn);
    content.appendChild(card);
    delBtn.addEventListener('click',(index)=>{
        myLibrary.splice(index,1);
        console.log(delBtn.parentElement.parentElement);
        content.removeChild(delBtn.parentElement);
        // showBooks();
    })
  });
}

function addBookToLibrary(title, author, pages, isRead) {
  let book = new Book(
    title,
    author,
    pages,
    isRead
  );

  myLibrary.push(book);
}


let form = document.querySelector("#bookForm");

form.addEventListener('submit',(event)=>{
    let bookTitle = document.querySelector('#bookTitle').value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let isRead = document.querySelector('input[name="isRead"]:checked').value;
    addBookToLibrary(bookTitle, author, pages, isRead);
    showBooks();
    event.preventDefault();
});








addBookToLibrary(
  "Freakonomics",
  "Stephen J. Dubner and Steven Levit",
  230,
  true
);

showBooks();


