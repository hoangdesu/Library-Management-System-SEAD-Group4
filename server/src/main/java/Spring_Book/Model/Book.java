package Spring_Book.Model;


import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table
public class Book implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private float price;
    private boolean available;
    private String category;
    private int numberStocks;
    private LocalDate dod; // Day of delivery
    private LocalDate dob; // Day of borrowing

    public Book(){}

    public Book (String name){
        this.name = name;
    }

    public Book(Long id, String name, float price, boolean available, String category, int numberStocks, LocalDate dod, LocalDate dob) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.available = available;
        this.category = category;
        this.numberStocks = numberStocks;
        this.dod = dod;
        this.dob = dob;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getNumberStocks() {
        return numberStocks;
    }

    public void setNumberStocks(int numberStocks) {
        this.numberStocks = numberStocks;
    }

    public LocalDate getDod() {
        return dod;
    }

    public void setDod(LocalDate dod) {
        this.dod = dod;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", available=" + available +
                ", category='" + category + '\'' +
                ", numberStocks=" + numberStocks +
                ", dod=" + dod +
                ", dob=" + dob +
                '}';
    }
}


