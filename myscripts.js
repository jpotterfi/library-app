let myLibrary = [];
let submit = document.getElementById("submit");
let rightContent = document.getElementById("right-content");
let order = 0;

function Status() {
}

Status.prototype.changeReadStatus = function() {
    if  (this.read == "true") {
         this.read = "false";
    } else if 
        (this.read == "false") { 
         this.read = "true";
    }
}

function Book(author, title, numberOfPages, read, genre, order){
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.genre = genre;
    this.order = order;
}

Book.prototype = Object.create(Status.prototype);

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


   let cleanSlate = document.getElementById("right-content");
   cleanSlate.innerHTML = '';

  for (i=0; i < myLibrary.length; i++) {
    


        ////bookCard styling//////

            const bookCard = document.createElement("div");
            bookCard.className = "bookCard"
            bookCard.id = "bookCard" + i;
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
            bookTitle = myLibrary[i].title;

            let bookAuthor = document.createElement("div");
            bookAuthor.className = "bookAuthor";
            bookAuthor = myLibrary[i].author;

            let bookNumberOfPages = document.createElement("div");
            bookNumberOfPages.className = "bookTitle";
            bookNumberOfPages = myLibrary[i].numberOfPages;

            let bookGenre = document.createElement("div");
            bookGenre.className = "bookTitle";
            bookGenre = myLibrary[i].genre;

            let bookReadStatus = document.createElement("div");
            bookReadStatus.className = "bookReadStatus";
            bookReadStatus = myLibrary[i].read;

            let bookOrder = document.createElement("div");
            bookOrder.className = "bookOrder";
            bookOrder = myLibrary[i].order;



            console.log(bookTitle + bookAuthor + bookNumberOfPages
                + bookGenre + bookReadStatus + bookOrder);


            let deleteButton = document.createElement("button");
            deleteButton.className = "delete";
            deleteButton.id = i;
            deleteButton.style.width = "100px";
            deleteButton.style.height = "100px";
            deleteButton.style.minWidth = "100px";
            deleteButton.style.minHeight = "100px";

            bookCard.appendChild(deleteButton);

            deleteButton.addEventListener("click", function(){
                const element = document.getElementById("bookCard" + deleteButton.id);
                myLibrary.splice(deleteButton.id, 1);
                order--;
                element.remove();
                console.table(myLibrary);
            });



            

            //const bookTitle = document.createElement("div");
        // bookTitle.className = "title";
            //bookTitle = myLibrary[order.title];
            //console.log("Book Title is" + bookTitle);

            /*testing protoype
            console.table(newBook);
            newBook.changeReadStatus();
            console.table(newBook);
            testing protoype*/    

        ///bookCard content formatting///

            rightContent.appendChild(bookCard);
            order++;

  } //end of loop

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