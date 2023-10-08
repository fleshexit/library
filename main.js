const myLibrary = [];
const openModal = document.querySelector("#open-modal");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
    console.log("open modal");
    modal.showModal();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages.toString();
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}