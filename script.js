const myLibrary = [];


function Book(title,author,pages,isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, Read : ${this.isRead}`
    }
}

function addBookToLibrary(){
    
}


let book = new Book('Freakonomics','Author','230',true);

console.log(book.info());