package Spring_Book.Repository;


import Spring_Book.Model.Book;

import java.util.Map;

//For Redis usage
public interface BookRepo {

    // Save a new book.
    void save(Book book);

    // Find book by id.
    Book findById(Long id);

    // Final all book.
    Map<Long, Book> findAll();

    // Delete a book.
    void delete(Long id);
}