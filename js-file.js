let show = document.getElementById('display');
let myLibrary = [];
let i = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  myLibrary.push(this)
}

function addBookToLibrary() {
  const bookDiv = document.createElement('bookdiv');
  let titleValue = document.getElementById('title').value;
  let authorValue = document.getElementById('author').value;
  let pagesValue = document.getElementById('pages').value;
  let readValue = document.getElementById('read').value;

  const book = new Book(titleValue, authorValue, pagesValue, readValue);
 

  
  bookDiv.innerHTML = 'Title: ' + myLibrary[i].title + '<br>' +  'Author: ' + myLibrary[i].author
  + '<br>' + 'Pages: ' +  myLibrary[i].pages + '<br>' + 'Read?: ' +  myLibrary[i].read;
  i += 1;

  show.appendChild(bookDiv)




  // const remove = document.createElement('button')
  // remove.setAttribute('id', 'remove')
  // remove.onclick = removeDiv();
  // const buttonText = document.createTextNode('X')
  // remove.appendChild(buttonText);
  // bookDiv.appendChild(remove);
}


//trying to get the button editable and give it a name or somehow attach a function to it