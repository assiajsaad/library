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

  myLibrary.map((book, index) => {
    cardText.textContent = book.info();

    card.appendChild(cardText);

    card.appendChild(btnToggleRead);
    card.appendChild(delBtn);
    content.appendChild(card);

    // content.addEventListener("click", (event) => {
    //   if (event.target.classList.contains(".btn-delete")) {
    //     myLibrary.splice(index, 1);
    //     delBtn.parentElement.remove();
    //   } else if (event.target.classList.contains(".btn-toggle-read")) {
    //     book.isRead = !book.isRead;
    //   }
    // });

    delBtn.addEventListener('click',()=>{
        myLibrary.splice(index,1);
        delBtn.parentElement.remove();

    })
    btnToggleRead.addEventListener('click',(event)=>{
      const cardIndex = Array.from(content.children).indexOf(event.target.parentElement);
      if(myLibrary[cardIndex].isRead === "Yes"){
        myLibrary[cardIndex].isRead = 'No';
      }else if (myLibrary[cardIndex].isRead === "No");{
        myLibrary[cardIndex].isRead = 'Yes';
      }
      console.log(myLibrary[cardIndex].isRead);
      // showBooks();
    })
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

// let cardContainer = document.querySelector('.container');
//   cardContainer.addEventListener('click', (event) => {
//   if (event.target.classList.contains('delete-btn')) {
//     const card = event.target.parentNode;
//     const index = Array.from(cardContainer.children).indexOf(card);
//     if (index !== -1) {
//       cardsData.splice(index, 1);
//       card.remove();
//     }
//   } else if(event.target.classList.contains('btn-toggle-read')) {

//   }
// });

addBookToLibrary(
  "Freakonomics",
  "Stephen J. Dubner and Steven Levit",
  230,
  'Yes'
);

showBooks();
console.log(myLibrary);