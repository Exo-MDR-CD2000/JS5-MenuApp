/** Coding Steps:
    Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
        Use at least one array.
        Use at least two classes.
        Your menu should have the options to create, view, and delete elements.

*/

/**
 * Let's create a library app that allows users to add, view, and delete books.
 * we can add a new book by providing the title, author, year of publication, and ISBN.
 * we can view all books in the library.
 * we can delete a book by the index.
 */

class BookItem {
  // define a class for a book item with title, author, year, and isbn
  constructor(title, author, year, isbn) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isbn = isbn;
  }
}

class Library {
  // defines a class for a library with the functionality to add, view, and delete books
  constructor() {
    this.books = []; // initialize an empty array to store books
  }

  addBook(title, author, year, isbn) { // arguments for the book item
    const newBook = new BookItem(title, author, year, isbn); // create a new book item
    this.books.push(newBook); // push the new book item to the books array
    alert(`Added book: ${title} by ${author}`); // display a message to the user
  }

  viewBooks() {
    if (this.books.length === 0) {
      alert(`No books in the library`);
      return; // Exit the function if there are no books in the library
    } 
      let bookList = `Library Books:\n`; // Initialize the book list string
      this.books.forEach((book, index) => { // each book in the books array
        bookList += `${index + 1}. ${book.title} by ${book.author} (Year ${book.year}, ISBN: ${book.isbn})\n`; // concatenate the book details to the book list string
      });
    alert(bookList); // This will only be called if there are books in the library
  }

  deleteBook(index) {
    if (index < 1 || index > this.books.length) { // if the index is less than 1 or greater than the number of books
      alert(`Invalid book index. Please try again.`); // we display an error message
      return;
    }
    const deletedBook = this.books.splice(index - 1, 1); // we remove the book from the original array and store the removed book in a new array
    alert(`Deleted book: ${deletedBook[0].title} by ${deletedBook[0].author}`); // display a message to the user. index 0 is used because splice returns an array with the deleted item
  }
}

// create menu class to display options to the user

class mainMenu {
  constructor() {
    this.Library = new Library();
  }

  displayMenu() {
    let choice;
    do {
      choice = prompt(
        `Library App Menu: \n1. Add Book\n2. View Books\n3. Delete Book\n4. Exit`
      );
      this.handleChoice(choice);
    } while (choice !== "4");
  }

  handleChoice(choice) {
    switch (choice) {
      case `1`: // Add Book
        const title = prompt(`Enter the title of the book:`);
        const author = prompt(`Enter the author of the book:`);
        const year = prompt(`Enter the year of publication:`);
        const isbn = prompt(`Enter the ISBN of the book:`);
        this.Library.addBook(title, author, year, isbn);
        break;

      case `2`: // view books
        this.Library.viewBooks();
        break;

      case `3`: // delete book
        const index = prompt(`Enter the index of the book to delete:`);
        this.Library.deleteBook(index);
        break;

      case `4`: // exit
        alert(`Exiting Library App...`);
        break;

      default: // default case for invalid choice
        alert(`Invalid choice. Please try again.`);
    }
  }
}


const menu = new mainMenu();
menu.displayMenu();