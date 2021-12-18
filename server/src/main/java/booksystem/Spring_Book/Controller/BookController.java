package booksystem.Spring_Book.Controller;

import booksystem.Spring_Book.Model.Book;
import booksystem.Spring_Book.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "api/v1/book")
public class BookController {

    @Autowired
    private BookService bookService;

    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @RequestMapping(path = "/books", method = RequestMethod.GET)
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping
    public List<Book> getBooks(){
        return bookService.getBooks();
    }

    @PostMapping
    public void registerNewBook(@RequestBody Book book){
        bookService.addNewBook(book);
    }

    @DeleteMapping(path = "{bookId}")
    public void deleteItem(@PathVariable("bookId") Long bookId){
        bookService.deleteItem(bookId);
    }

    @PutMapping(path = "{bookId}")
    public void updateItem(
            @PathVariable("bookId") Long id,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) int numStocks){
        bookService.updateBook(id, name, numStocks);
    }

}
