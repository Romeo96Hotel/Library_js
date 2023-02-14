class Book {
  constructor(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;

    this.isRead = false;
  }

  getBookInfo = function () {
    return `Title: ${this.title}, Author: ${this.author}, Number of pages: ${this.numberOfPages}, Is Read: ${this.isRead}`;
  };
}


