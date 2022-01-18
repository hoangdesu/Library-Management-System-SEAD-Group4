package Spring_Book.Controller;

import Spring_Book.Model.Book;
import Spring_Book.Model.Producer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/kafka")
public class KafkaController {


    private static final Logger logger = LoggerFactory.getLogger(KafkaController.class);
    private static final String TOPIC = "users";

//    @Autowired
//    private KafkaTemplate<String, String> kafkaTemplate;

    @Autowired
    private Producer producer;

    @PostMapping(value = "/book/publish")
    public String sendMessageToKafkaTopic(@RequestBody Book book) {
        logger.info(String.format("#### -> Producing message -> %s", book.getName()));
//        this.kafkaTemplate.send(TOPIC, message);

        this.producer.sendMessage(book);

        return "Success";
    }

    @PostMapping(value = "/person/publish")
    public String sendMessageToKafkaTopic(@RequestBody Person person){
        logger.info(String.format("### -> Producing message -> %s", Person.getEmail()));
        this.producer.sendMessage(person);
    }

    @GetMapping(value = "/hello")
    public void hello() {
        System.out.println("Hello");
    }
}
