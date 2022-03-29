let myLibrary = [];
let submit = document.getElementById("submit");
let rightContent = document.getElementById("right-content");
let order = 0;

function Book(author, title, numberOfPages, read, genre, order){
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.genre = genre;
    this.order = order;
}

submit.addEventListener("click", function(){
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let numberOfPages = document.getElementById("numberOfPages").value;
  let genre = document.getElementById("genre").value;
  let readStatus = document.querySelector('input[name="read-status"]:checked').value;

    console.log(author);
    console.log(title);
    console.log(numberOfPages);
    console.log(genre);
    console.log(readStatus);

   const newBook = new Book(author, title, numberOfPages, readStatus, genre, order);
   myLibrary.push(newBook);

   console.table(newBook)
  
//myLibrary.push(new Book(author, title, numberOfPages, readStatus, genre, order));


console.table(myLibrary);
  

////bookCard styling//////

    const bookCard = document.createElement("div");
    bookCard.className = "bookCard"
    bookCard.style.width = "250px";
    bookCard.style.height = "300px";
    bookCard.style.borderRadius = "8px";
    //bookCard.style.border = "2px black solid"
    bookCard.style.borderLeft = "12px #F0B428 solid";
    //bookCard.style.borderTopLeftRadius = "4px";
    //bookCard.style.borderBottomLeftRadius = "4px";
    bookCard.style.minWidth = "250px";
    bookCard.style.minHeight = "300px";
    bookCard.style.backgroundColor = "white";
    bookCard.style.margin = "10px";
    bookCard.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.25)";
    bookCard.style.display = "flex";
    bookCard.style.flexDirection = "column";

    
    
////bookCard styling//////

///bookCard content formatting///



    //let currentBook = myLibrary[order];
    //console.log("currentBook is " + currentBook);

    let bookTitle = document.createElement("div");
    bookTitle.className = "bookTitle";
    bookTitle = myLibrary[0].title;

    let bookAuthor = document.createElement("div");
    bookAuthor.className = "bookAuthor";
    bookAuthor = newBook.author;

    let bookNumberOfPages = document.createElement("div");
    bookNumberOfPages.className = "bookTitle";
    bookNumberOfPages = newBook.numberOfPages;

    let bookGenre = document.createElement("div");
    bookGenre.className = "bookTitle";
    bookGenre = newBook.genre;

    let bookReadStatus = document.createElement("div");
    bookReadStatus.className = "bookReadStatus";
    bookReadStatus = newBook.read;

    let bookOrder = document.createElement("div");
    bookOrder.className = "bookOrder";
    bookOrder = newBook.order;


    console.log(bookTitle + bookAuthor + bookNumberOfPages
        + bookGenre + bookReadStatus + bookOrder);
    //const bookTitle = document.createElement("div");
   // bookTitle.className = "title";
    //bookTitle = myLibrary[order.title];
    //console.log("Book Title is" + bookTitle);




///bookCard content formatting///

    rightContent.appendChild(bookCard);
    order++;
});



///newBook = 

function addBookToLibrary() {
    //let author =
    //let title =
    //let numberOfPages =
    //let read =
    //let genre =
    //myLibrary.push()
}