package Spring_Book.Controller;

import Spring_Book.Model.Book;
import Spring_Book.Service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "api/v1/book")
public class BookController {

    private static final Logger LOG = LoggerFactory.getLogger(BookController.class);

    @Autowired
    BookService service;

    // Save a new employee.
    // Url - http://localhost:10091/api/redis/book
    @PostMapping
    public String save(@RequestBody final Book book) {
        LOG.info("Saving the new book to the redis.");
        service.save(book);
        return "Successfully added. book with id= " + book.getId();
    }

    // Get all employees.
    // Url - http://localhost:10091/api/redis/book/getall
    @GetMapping("/getall")
    public Map<Long, Book> findAll() {
        LOG.info("Fetching all book from the redis.");
        final Map<Long, Book> bookMap = service.findAll();
        // Todo - If developers like they can sort the map (optional).
        return bookMap;
    }

    // Get employee by id.
    // Url - http://localhost:10091/api/redis/book/get/<book_id>
    @GetMapping("/get/{id}")
    public Book findById(@PathVariable("id") final Long id) {
        LOG.info("Fetching book with id= " + id);
        return service.findById(id);
    }

    // Delete employee by id.
    // Url - http://localhost:10091/api/redis/employee/delete/<book_id>
    @DeleteMapping("/delete/{id}")
    public Map<Long, Book> delete(@PathVariable("id") final Long id) {
        LOG.info("Deleting book with id= " + id);
        // Deleting the book.
        service.delete(id);
        // Returning the all book (post the deleted one).
        return findAll();
    }


}
