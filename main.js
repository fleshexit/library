const myLibrary = [];

const openModal = document.querySelector("#open-modal");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
    console.log("open modal");
    modal.showModal();
});

// Library

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages.toString();
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const form = document.querySelector(".modal-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    addLibraryToPage();
    console.log(book) 
    modal.close();

});

function addLibraryToPage() {
    const library = document.querySelector(".main");
    library.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const img = document.createElement("img");
        img.src = "./images/bookshelf.jpg";

        const title = document.createElement("h2");
        title.textContent = '"' + book.title + '"';

        const author = document.createElement("h3");
        author.textContent = book.author;

        const pages = document.createElement("h3");
        pages.textContent = `${book.pages} pages`

        const read = document.createElement("h3");
        read.textContent = ((book.read == true) ? "read" : "not read");

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "Remove";
        remove.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        addLibraryToPage();
        });

        bookCard.appendChild(img);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(remove);
        library.appendChild(bookCard);
    });
}


// <a href="https://www.freepik.com/free-photo/antique-book-shelf-vintage-background_21631166.htm#query=bookshelf&position=20&from_view=keyword&track=sph">Image by rawpixel.com</a> on Freepik

// <a href="https://www.freepik.com/free-vector/book-shelves-dtcorative-colorful-icon-poster_2871137.htm#query=bookshelf&position=2&from_view=keyword&track=sph">Image by macrovector</a> on Freepik

// <a href="https://www.freepik.com/free-vector/white-bookshelf-mockup-books-shelf-library_8497568.htm#query=bookshelf&position=3&from_view=keyword&track=sph">Image by upklyak</a> on Freepik
