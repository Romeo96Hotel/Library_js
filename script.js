class Book {
  constructor(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;

    this.isRead = false;
  }

  bookInfo = function () {
    return `Title: ${this.title}, Author: ${this.author}, Number of pages: ${this.numberOfPages}, Is Read: ${this.isRead}`;
  };
}

/* dummy book objs */
const book1 = new Book("War of the worlds", "H. G. Wells", 350);
const book2 = new Book("My little pony saga", "Scholastic", 100000000);
let bookArray = [book1, book2];

/* dom stuff */
const newEl = (tag) => document.createElement(tag);

const addText = (element, text) => (element.textContent = text);

const appendNode = (library, book) => library.appendChild(book);

const addClassName = (element, className) => element.classList.add(className);

const bookData = (book) => book.bookInfo();


const myLibrary = document.querySelector("#library");

/* create div element with book info for length of array */
bookArray.forEach((book) => {

});


