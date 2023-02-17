class Book {
  constructor() {
    this.title = document.querySelector("#title").value;
    this.author = document.querySelector("#author").value;
    this.hasRead = false;
  }

  get title() {
    return this.title;
  }

  get author() {
    return this.author;
  }

  set hasRead(read) {
    const radio = document.querySelector("#radio-btn");
    this.hasRead = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
}
