package Spring_Book.Repository;


import Spring_Book.Model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends JpaRepository<Person, Long> {

    Person findByUserName(String userName);

}

