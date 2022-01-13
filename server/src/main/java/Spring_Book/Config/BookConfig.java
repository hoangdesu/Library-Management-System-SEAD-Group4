package Spring_Book.Config;

import Spring_Book.Model.Book;
import Spring_Book.Repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class BookConfig {

    //    private Long id;
    //    private String name;
    //    private float price;
    //    private boolean available;
    //    private String category;
    //    private int numberStocks;
    //    private LocalDate dod; // Day of delivery
    //    private LocalDate dob; // Day of borrowing
    @Bean
    CommandLineRunner commandLineRunner(BookRepository bookRepository){
        return args -> {
            Book book1 = new Book(
                    1L,
                    "Harry Potter",
                    200,
                    true,
                    "Novel",
                    100,
                    LocalDate.of(2018, Month.JANUARY, 5),
                    LocalDate.of(2018, Month.JANUARY, 5)
            );


            bookRepository.saveAll(List.of(book1));
        };
    }
}
