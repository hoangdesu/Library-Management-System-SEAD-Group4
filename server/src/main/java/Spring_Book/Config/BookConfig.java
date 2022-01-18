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

            Book book2 = new Book(
                    2L,
                    "The Haunting of Hill House",
                    100,
                    true,
                    "Horror",
                    50,
                    LocalDate.of(2018, Month.JANUARY, 30),
                    LocalDate.of(2020, Month.JANUARY, 20)
            );

            Book book3 = new Book(
                    3L,
                    "The Shining",
                    40,
                    true,
                    "Horror",
                    30,
                    LocalDate.of(2015, Month.JANUARY, 30),
                    LocalDate.of(2021, Month.JANUARY, 20)
            );

            Book book4 = new Book(
                    4L,
                    "Dracula",
                    40,
                    true,
                    "Horror",
                    60,
                    LocalDate.of(2015, Month.JANUARY, 21),
                    LocalDate.of(2021, Month.JANUARY, 23)
            );

            Book book5 = new Book(
                    5L,
                    "Dune",
                    20,
                    true,
                    "Science Fiction",
                    40,
                    LocalDate.of(2012, Month.JANUARY, 18),
                    LocalDate.of(2022, Month.JANUARY, 23)
            );

            Book book6 = new Book(
                    6L,
                    "Farenheit 451",
                    20,
                    true,
                    "Science Fiction",
                    70,
                    LocalDate.of(2011, Month.JANUARY, 20),
                    LocalDate.of(2022, Month.JANUARY, 23)
            );

            Book book7 = new Book(
                    7L,
                    "The Great Gatsby",
                    10,
                    true,
                    "Novel",
                    70,
                    LocalDate.of(2013, Month.JANUARY, 18),
                    LocalDate.of(2022, Month.JANUARY, 23)
            );

            Book book8 = new Book(
                    8L,
                    "To Kill A Mockingbird",
                    70,
                    true,
                    "Novel",
                    70,
                    LocalDate.of(2016, Month.JANUARY, 8),
                    LocalDate.of(2019, Month.JANUARY, 16)
            );

            Book book9 = new Book(
                    9L,
                    "To Kill A Mockingbird",
                    70,
                    true,
                    "Novel",
                    70,
                    LocalDate.of(2016, Month.JANUARY, 8),
                    LocalDate.of(2019, Month.JANUARY, 16)
            );

            Book book10 = new Book(
                    10L,
                    "Mrs.Dalloway",
                    24,
                    true,
                    "Novel",
                    70,
                    LocalDate.of(2017, Month.JANUARY, 8),
                    LocalDate.of(2020, Month.JANUARY, 16)
            );
            bookRepository.saveAll(List.of(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10));
        };
    }
}