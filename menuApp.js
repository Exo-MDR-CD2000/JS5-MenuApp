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

class BookItem { // define a class for a book item with title, author, year, and isbn
    constructor(title, author, year, isbn) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
    }
}

class Library { // defines a class for a library with the functionality to add, view, and delete books
    constructor() {
        this.books = []; // initialize an empty array to store books
    }
}