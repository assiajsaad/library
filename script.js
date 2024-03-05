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
  let content = document.querySelector(".content");
  content.innerHTML = ''; // Clear previous content

  myLibrary.forEach((book, index) => {
    let card = document.createElement("div");
    card.className = "card";
    let cardText = document.createElement("div");
    cardText.className = "card-text";
    let delBtn = document.createElement("button");
    delBtn.className = "btn-delete";
    delBtn.textContent = "Delete Item";

    let btnToggleRead = document.createElement("button");
    btnToggleRead.className = "btn-toggle-read";
    btnToggleRead.textContent = "Change Read Status";

    cardText.textContent = book.info();

    card.appendChild(cardText);
    card.appendChild(btnToggleRead);
    card.appendChild(delBtn);
    content.appendChild(card);

  });

}

function addBookToLibrary(title, author, pages, isRead) {
  let book = new Book(title, author, pages, isRead);

  myLibrary.push(book);
}

let form = document.querySelector("#bookForm");

form.addEventListener("submit", (event) => {
  let bookTitle = document.querySelector("#bookTitle").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let isRead = document.querySelector('input[name="isRead"]:checked').value;
  addBookToLibrary(bookTitle, author, pages, isRead);
  showBooks();
  event.preventDefault();
});

document.querySelector(".content").addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-delete')) {
    let card = event.target.parentElement;
    let index = Array.from(card.parentElement.children).indexOf(card);
    myLibrary.splice(index, 1);
    card.remove();
  } else if (event.target.classList.contains('btn-toggle-read')) {
    let card = event.target.parentElement;
    let index = Array.from(card.parentElement.children).indexOf(card);
    myLibrary[index].isRead = myLibrary[index].isRead === "Yes" ? "No" : "Yes";
    card.firstElementChild.textContent = myLibrary[index].info();
  }
});

addBookToLibrary(
  "Freakonomics",
  "Stephen J. Dubner and Steven Levit",
  230,
  'Yes'
);

showBooks();
console.log(myLibrary);
