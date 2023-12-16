const Book = require('./Book');
const Library = require('./Library');

const library = new Library(); // creating library

const book1 = new Book("Demian", "Hermann Hesse", 1919);
const book2 = new Book("Steppenwolf", "Herman Hesse", 1927); // creating instances

library.addBook(book1);
library.addBook(book2);
console.log(" ");


library.displayBooks(); 
console.log(" ");


book1.rentBook();
console.log(" ");


library.displayBooks(); 
console.log(" ");// display available books  after renting book


book1.returnBook();
console.log(" ");


library.displayBooks(); // display available booksafter returning book
console.log(" ");

library.searchBook("Demian");
