package Spring_Book.Repository

import com.example.kafka_redis_book.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//For Kafka usage
@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
}
