package Spring_Book.Service;

import Spring_Book.Model.Book;
import Spring_Book.Repository.BookRepo;
import Spring_Book.Repository.BookRepository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.transaction.Transactional;
import javax.annotation.PostConstruct;
import java.util.Map;

@Transactional
@Service
@RequestMapping(path = "api/v1/book")
public class BookService implements BookRepo {

    private final String BOOK_CACHE = "BOOK";

    @Autowired
    RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, Long, Book> hashOperations;
    BookRepository bookDBRepository;

    // This annotation makes sure that the method needs to be executed after
    // dependency injection is done to perform any initialization.
    @PostConstruct
    private void intializeHashOperations() {
        hashOperations = redisTemplate.opsForHash();
    }

    // Save operation.
    @Override
    public void save(final Book book) {
//        hashOperations.put(BOOK_CACHE, book.getId(), book);
        bookDBRepository.save(book);
    }

    //Save to Cache operation
    public void saveToCache(final Book book){
        hashOperations.put(BOOK_CACHE, book.getId(), book);
    }

    //get a book by Id
    public Book getBook(Long id){
        Book book = null;
        try{
            book = this.bookDBRepository.findById(id)
                    .orElseThrow(() -> new Exception("Book not found for this id "+ id));
        }catch (Exception e){
            e.printStackTrace();
        }
        return book;
    }


    // Find by book id operation.
    @Override
    public Book findById(final Long id) {
        Book book = (Book) hashOperations.get(BOOK_CACHE, id);
        if (book != null){
            return book;
        }else{
            Book book1 = this.getBook(Long.valueOf(id));
            saveToCache(book1);
            return book1;
        }
    }

    // Find all book operation.
    @Override
    public Map<Long, Book> findAll() {
        return hashOperations.entries(BOOK_CACHE);
    }

    // Delete book by id operation.
    @Override
    public void delete(Long id) {
        hashOperations.delete(BOOK_CACHE, id);
    }

}
