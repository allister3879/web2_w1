const Book = require('./Book');

class Library {
    constructor() {
        this.books = []; // array of books
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`"${book.getTitle()}" has been added to the library!`);
    }
  
    deleteBook(book) {
      const index = this.books.indexOf(book);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`"${book.getTitle()}" has been deleted from the library.`);
      } else {
        console.log(`"${book.getTitle()}" not found in the library...`);
      }
    }
  
    searchBook(title) {
      const foundBook = this.books.find((book) => book.getTitle() === title);
      if (foundBook) {
        console.log(`"${foundBook.getTitle()}" by ${foundBook.getAuthor()} found.`);
      } else {
        console.log(`Book with title "${title}" not found.`);
      }
    }
  
    displayBooks() {
      console.log("Books in the library:");
      this.books.forEach((book) => {
        console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()}) - ${book.isAvailable() ? 'Available' : 'Borrowed'}`);
      });
    }
  
}

module.exports = Library;