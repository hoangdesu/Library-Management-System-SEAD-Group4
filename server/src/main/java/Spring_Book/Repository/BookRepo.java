package Spring_Book.Repository;


import Spring_Book.Model.Book;

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
}