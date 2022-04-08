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

   //organize order
    for (k = 0; k < myLibrary.length; k++) {
        myLibrary[k].order = k;
    }
    
    //create number of cards equal to myLibrary.length
  for (i=0; i < myLibrary.length; i++) {
    


        ////bookCard styling//////

            const bookCard = document.createElement("div");
            bookCard.className = "bookCard"
            bookCard.id = "bookCard" + i;
            bookCard.style.width = "300px";
            bookCard.style.height = "350x";
            bookCard.style.borderRadius = "8px";
            //bookCard.style.border = "2px black solid"
            //bookCard.style.borderLeft = "20px #F0B428 solid";
            //bookCard.style.borderTopLeftRadius = "4px";
            //bookCard.style.borderBottomLeftRadius = "4px";
            bookCard.style.minWidth = "300px";
            bookCard.style.minHeight = "350px";
            bookCard.style.backgroundColor = "white";
            bookCard.style.margin = "10px";
            bookCard.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.25)";
            bookCard.style.display = "flex";
            bookCard.style.flexDirection = "row";
            bookCard.style.justifyContent = "space-between";
            //bookCard.style.alignItems = "center";
            //bookCard.style.gap = "10px";
            //bookCard.style.fontSize = "18px";
            //bookCard.style.textAlign = "center";
            
            
        ////bookCard styling//////

        ///bookCard content formatting///



            //let currentBook = myLibrary[order];
            //console.log("currentBook is " + currentBook);


            /////// category content
            let bookTitle = document.createElement("div");
            bookTitle.className = "category";
            bookTitle.id = "bookTitle";
            bookTitle.textContent  = myLibrary[i].title;

            let bookAuthor = document.createElement("div");
            bookAuthor.className = "category";
            bookAuthor.id = "bookAuthor";
            bookAuthor.textContent  = myLibrary[i].author;

            let bookNumberOfPages = document.createElement("div");
            bookNumberOfPages.className = "category";
            bookNumberOfPages.id = "bookNumberOfPages";
            bookNumberOfPages.textContent = myLibrary[i].numberOfPages;

            let bookGenre = document.createElement("div");
            bookGenre.className = "category";
            bookGenre.id = "bookGenre";
            if (myLibrary[i].genre == "literary-fiction"){
                bookGenre.textContent = "Literary Fiction";
            }
            if (myLibrary[i].genre == "sci-fi"){
                bookGenre.textContent = "Science Fiction";
            }
            if (myLibrary[i].genre == "fantasy"){
                bookGenre.textContent = "Fantasy";
            }  
            if (myLibrary[i].genre == "mystery"){
                bookGenre.textContent = "Mystery";
            }  
            if (myLibrary[i].genre == "non-fiction"){
                bookGenre.textContent = "Non-fiction";
            }
            if (myLibrary[i].genre == "other"){
                bookGenre.textContent = "Other";
            }        
            

            let bookReadStatus = document.createElement("div");
            bookReadStatus.className = "category";
            bookAuthor.id = "bookReadStatus";
            bookReadStatus = myLibrary[i].read;

            let bookOrder = document.createElement("div");
            bookOrder.className = "category";
            bookAuthor.id = "bookOrder";
            bookOrder = myLibrary[i].order;
            /////// category content

            /////// category headers
            let bookTitleHeader = document.createElement("div");
            bookTitleHeader.className = "categoryHeader";
            bookTitleHeader.textContent = "Title:";

            let bookAuthorHeader = document.createElement("div");
            bookAuthorHeader.className = "categoryHeader";
            bookAuthorHeader.textContent = "Author:";

            let bookNumberOfPagesHeader = document.createElement("div");
            bookNumberOfPagesHeader.className = "categoryHeader";
            bookNumberOfPagesHeader.textContent = "# of Pages:";

            let bookGenreHeader = document.createElement("div");
            bookGenreHeader.className = "categoryHeader";
            bookGenreHeader.textContent = "Genre:";

             
            /////// category headers

            console.log(bookTitle + bookAuthor + bookNumberOfPages
                + bookGenre + bookReadStatus + bookOrder);


            

            ///bookcardLeft

            let bookCardLeft = document.createElement("div");
            bookCardLeft.id = "bookCardLeft";
            bookCard.appendChild(bookCardLeft);

            let changeStatusButton = document.createElement("button");
            changeStatusButton.className = "changeStatusButton";
            changeStatusButton.id = i;
            
            let changeStatusButtonText = document.createElement("div");
            changeStatusButtonText.className = "changeStatusButtonText";
            

            if (myLibrary[i].read == "true"){
                changeStatusButtonText.textContent = "Read";
                changeStatusButton.style.backgroundColor = "#F0B428";
            } else {
                changeStatusButtonText.textContent = "Want to Read";
                changeStatusButton.style.backgroundColor = "#00a846";
            }

            


            bookCardLeft.appendChild(changeStatusButton);
            changeStatusButton.appendChild(changeStatusButtonText);
            

            ///bookcardLeft

            ///bookCardRight

            let bookCardRight = document.createElement("div");
            bookCardRight.id = "bookCardRight";
            
            bookCard.appendChild(bookCardRight);

            
            bookCardRight.appendChild(bookTitleHeader);
            bookCardRight.appendChild(bookTitle);
            bookCardRight.appendChild(bookAuthorHeader);
            bookCardRight.appendChild(bookAuthor);
            bookCardRight.appendChild(bookNumberOfPagesHeader);
            bookCardRight.appendChild(bookNumberOfPages);
            bookCardRight.appendChild(bookGenreHeader);
            bookCardRight.appendChild(bookGenre);

            ///bookCardRight

            ///delete button
            let deleteButton = document.createElement("button");
            deleteButton.className = "delete";
            deleteButton.id = i;
            deleteButton.style.width = "25px";
            deleteButton.style.height = "25px";
            deleteButton.style.minWidth = "25px";
            deleteButton.style.minHeight = "25px";
            deleteButton.textContent = "X";


            deleteButton.addEventListener("click", function(){
                const element = document.getElementById("bookCard" + deleteButton.id);
                element.remove();
                let position = 0;

                for (j = 0; j < myLibrary.length; j++) {
                    if (myLibrary[j].order == deleteButton.id) {
                    position = myLibrary[j].order;
                    }
                }
                console.log("position before deletion is " + position);
                myLibrary.splice(position, 1);

                
                order--;
                
                console.table(myLibrary);
            });

            bookCard.appendChild(deleteButton);
            ///delete button

            

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
            

            
            console.table(myLibrary);

  } //end of loop
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