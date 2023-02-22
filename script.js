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

const library = document.querySelector("#library");

const inputButton = document.querySelector("#submit");

const createRemoveButton = () => {
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "remove";

  return removeButton;
};

const createTextEl = (tag, text) => {
  const element = document.createElement(tag);
  element.classList.add("book-element");
  element.innerHTML = text;

  return element;
};

inputButton.addEventListener("click", (e) => {
  e.preventDefault();

  const myArray = [];

  const bookInfo = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
  };

  const text = `Title: ${bookInfo.title}  Author: ${bookInfo.author}`;
  const textEl = createTextEl("div", text);
  const removeButton = createRemoveButton();

  removeButton.addEventListener("click", (e) => {
    const parent = e.target.parentNode;
    library.removeChild(parent);
  });

  textEl.append(removeButton);

  myArray.push(textEl);

  for (let i = 0; i < myArray.length; i++) {
    const bookEl = myArray[i];
    library.appendChild(bookEl);
  }
});
