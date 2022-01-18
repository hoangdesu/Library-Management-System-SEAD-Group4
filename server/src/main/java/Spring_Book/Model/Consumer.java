package Spring_Book.Model;

import Spring_Book.Repository.BookRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class Consumer {

    private final Logger logger = LoggerFactory.getLogger(Consumer.class);

    @Autowired
    private BookRepository bookRepository;


    @KafkaListener(topics = "books", groupId = "group_id")
    public void consume(String message) throws IOException {
        logger.info(String.format("#### -> Consumed message -> %s", message));

        //save message to database
        Book book = new Book(message);

        bookRepository.save(book);

        logger.info(String.format("#### -> ID message -> %s", book.getId()));
    }
}
