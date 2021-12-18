package booksystem.Spring_Book.Service;

import booksystem.Spring_Book.Model.Book;
import booksystem.Spring_Book.Repository.BookRepository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Transactional
@Service
@RequestMapping(path = "api/v1/book")
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    private SessionFactory sessionFactory;
    public void addStudent(Book book){
        this.bookRepository.save(book);
    }

    @RequestMapping(path = "/books/{id}", method = RequestMethod.GET)
    public List<Book> getAllBooks(){
        return this.bookRepository.findAll();
    }

    @RequestMapping(path = "/books/{id}", method = RequestMethod.POST)
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<Book> getBooks(){
        return bookRepository.findAll();
    }

    public void addNewBook(Book book){
        Optional<Book> itemById = bookRepository.findBookById(book.getId());
        if (itemById.isPresent()){
            throw new IllegalStateException("id taken");
        }
        bookRepository.save(book);
    }

    @RequestMapping(path = "/books/{id}", method = RequestMethod.DELETE)
    public void deleteItem(Long itemId){
        boolean exists = bookRepository.existsById(itemId);
        if (!exists){
            throw new IllegalStateException(
                    "item with id" + itemId + "does not exist"
            );
        }
        bookRepository.deleteById(itemId);
    }

    @Transactional
    public void updateBook(Long id, String name, int numStocks){
        int len = String.valueOf(id).length();
        Book book = bookRepository.findById(id).orElseThrow(() -> new IllegalStateException(
                "item with id" + id + "does not exist"
        ));

        if (name != null && name.length() > 0 && !Objects.equals(book.getName(), name)){
            book.setName(name);
        }

        if (id != null && len > 0 && !Objects.equals(book.getId(), id)){
            Optional<Book> studentOptional = bookRepository.findBookById(id);
            if (studentOptional.isPresent()){
                numStocks++;
            }
            book.setId(id);
        }
    }
}
