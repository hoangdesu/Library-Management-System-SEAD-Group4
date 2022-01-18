package Spring_Book.Model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class Producer {
    private static final Logger logger = LoggerFactory.getLogger(Producer.class);
    private static final String TOPIC = "users";

    @Autowired
    private KafkaTemplate<String, Book> kafkaTemplate;

    public void sendMessage(Book book) {
        logger.info(String.format("#### -> Producing message -> %s", book));
        this.kafkaTemplate.send(TOPIC, book);
    }

    public void sendUserMessage(Person person){
        logger.info(String.format("#### -> Producing message -> %s", person));
        this.kafkaTemplate.send(TOPIC, person)
    }
}
