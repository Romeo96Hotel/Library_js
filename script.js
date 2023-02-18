/* 

button is clicked
    get title value
    get author value
    get number of pages 
    get is read  
    
    create container for book
    create element for title
    create element for author
    create element for number of pages
    create element for is read
    create remove button

    append element to container

    append container to library
    

*/


class Book {
    constructor() {
      this.title = document.querySelector("#title");
      this.author = document.querySelector("#author");
      this.numberOfPages = ;
  
      this.isRead = false;
    }
  
    getBookInfo = function () {
      return `Title: ${this.title}, Author: ${this.author}, Number of pages: ${this.numberOfPages}, Is Read: ${this.isRead}`;
    };
  }
  