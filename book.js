class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.available = true; // availability is set to true by default
    }
  
    getTitle() {
      return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
  
    getAuthor() {
      return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }
  
    getYear() {
      return this.year;
    }
    setYear(year) {
        this.year = year;
    }
  
    isAvailable() {
      return this.available;
    }
  
    rentBook() {
      if (this.available) {
        this.available = false;
        console.log(`"${this.title}" rented succesfully!`);
      } else {
        console.log(`"${this.title}" is not availaable...`);
      }
    }
  
    returnBook() {
      this.available = true;
      console.log(`"${this.title}" returned succesfully`);
    }
  }

  module.exports = Book;