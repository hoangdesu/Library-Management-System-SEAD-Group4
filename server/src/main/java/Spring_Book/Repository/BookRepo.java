package Spring_Book.Repository;


import Spring_Book.Model.Book;

import java.util.List;
import java.util.Map;

//For Redis usage
public interface BookRepo {

    // Save a new employee.
    void save(Book book);

    // Find employee by id.
    Book findById(Long id);

    // Final all employees.
    Map<Long, Book> findAll();

    // Delete a employee.
    void delete(Long id);

    void deleteFromRedis(Long id);
    List<Book> getBooksByName(String name);
    List<Book> getBooksByCategory(String category);
}