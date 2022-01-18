package Spring_Book.Repository;


import Spring_Book.Model.Person;

import java.util.Map;

//For Redis usage
public interface PersonRepo {

    // Save a new book.
    void save(Person person);

    // Find book by id.
    Person findById(Long id);

    // Final all book.
    Map<Long, Person> findAll();

    // Delete a book.
    void delete(Long id);
}