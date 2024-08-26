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
  // define a class for a book item with title, author, year, and isbn (blueprint for a book)
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
    this.books = []; // initialize an empty array to store books (fulfills the requirement to use at least one array)
  }

  addBook(title, author, year, isbn) {
    // arguments for the book item
    const newBook = new BookItem(title, author, year, isbn); // create a new book item
    this.books.push(newBook); // push the new book item to the books array
    alert(`Added book: ${title} by ${author}`); // display a message to the user
  }

  viewBooks() {
    if (this.books.length === 0) { // if there are no books in the library
      alert(`No books in the library`);
      return; // Exit the function if there are no books in the library
    }
    let bookList = `Library Books:\n`; // Initialize the book list string
    this.books.forEach((book, index) => {
      // each book in the books array
      bookList += `${index + 1}. ${book.title} by ${book.author} (Year ${ // index + 1 to start from 1, book title, author, year, and ISBN
        book.year
      }, ISBN: ${book.isbn})\n`; // concatenate the book details to the book list string
    });
    alert(bookList); // This will only be called if there are books in the library
  }

/*
  editBook(index, title, author, year, isbn) {
    if (this.books.length === 0) {
      alert(`No books in the library to edit`);
      return; // Exit the function if there are no books in the library
    }
    if (index < 1 || index > this.books.length) {
      // if the index is less than 1 or greater than the number of books
      alert(`Invalid book index. Please try again.`); // we display an error message
      return;
    }
    const editBook = this.books[index]; // get the book to edit
      editBook.title = title;
      editBook.author = author;
      editBook.year = year;
      editBook.isbn = isbn;
      alert(`Edited book: ${title} by ${author}`);
  }
      
*/    

  deleteBook(index) {
    if (index < 1 || index > this.books.length) {
      // if the index is less than 1 or greater than the number of books
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
    this.Library = new Library(); // the main menu class has a library object
  }

  displayMenu() {
    let choice; // use a do-while loop to display the menu until the user exits
    do {
      choice = prompt(`Library App Menu: 

1) Add Book
2) View Books
3) Delete Book
4) Exit

`);
      this.handleChoice(choice);
    } while (choice !== "4"); // choice 4 exits the menu
  }

  handleChoice(choice) { // use a switch statement to handle the user's choice from 1 to 4
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

    //   case `3`: // edit book
    //     this.Library.viewBooks();
    //     const editIndex = prompt(`Enter the index of the book to edit:`);
    //     const editTitle = prompt(`Enter the title of the book:`);
    //     const editAuthor = prompt(`Enter the author of the book:`);
    //     const editYear = prompt(`Enter the year of publication:`);
    //     const editIsbn = prompt(`Enter the ISBN of the book:`);
    //     this.Library.addBook(
    //       editIndex,
    //       editTitle,
    //       editAuthor,
    //       editYear,
    //       editIsbn
    //     );

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

const menu = new mainMenu(); // instantiate the main menu object
menu.displayMenu(); // invoke the displayMenu method to display the menu


// Console log the library object to see the books array
console.log(menu.Library);



// ========================================================================================================

/** OOP Pillars Used in this assignment:
 * Encapsulation: The classes are used to encapsulate the properties and methods related to the library and book items.
 * Abstraction: The mainMenu class abstracts the details of the library and book classes from the user interface.
 * Inheritance: There is no inheritance used in this example.
 * Polymorphism: There is no polymorphism used in this example.
*/