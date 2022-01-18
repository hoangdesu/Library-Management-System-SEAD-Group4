package Spring_Book.Service;

import Spring_Book.Model.Person;
import Spring_Book.Repository.PersonRepo;
import Spring_Book.Repository.PersonRepository;
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
@RequestMapping(path = "api/v1/person")
public class PersonService implements PersonRepo {

    private final String PERSON_CACHE = "PERSON";

    @Autowired
    RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, Long, Person> hashOperations;
    PersonRepository personDBRepository;

    // This annotation makes sure that the method needs to be executed after
    // dependency injection is done to perform any initialization.
    @PostConstruct
    private void intializeHashOperations() {
        hashOperations = redisTemplate.opsForHash();
    }

    // Save operation.
    @Override
    public void save(final Person person) {
        personDBRepository.save(person);
    }

    //Save to Cache operation
    public void saveToCache(final Person person){
        hashOperations.put(PERSON_CACHE, person.getId(), person);
    }

    //get a person by Id
    public Person getPerson(Long id){
        Person person = null;
        try{
            person = this.personDBRepository.findById(id)
                    .orElseThrow(() -> new Exception("Person not found for this id "+ id));
        }catch (Exception e){
            e.printStackTrace();
        }
        return person;
    }


    // Find by person id operation.
    @Override
    public Person findById(final Long id) {
        Person person = (Person) hashOperations.get(PERSON_CACHE, id);
        if (person != null){
            return person;
        }else{
            Person person1 = this.getPerson(Long.valueOf(id));
            saveToCache(person1);
            return person1;
        }
    }

    // Find all person operation.
    @Override
    public Map<Long, Person> findAll() {
        return hashOperations.entries(PERSON_CACHE);
    }

    // Delete person by id operation.
    @Override
    public void delete(Long id) {
        hashOperations.delete(PERSON_CACHE, id);
    }

}
