package Spring_Book.Service;

import Spring_Book.Model.Book;
import Spring_Book.Model.Person;
import Spring_Book.Repository.BookRepository;
import Spring_Book.Repository.UserDetailsRepository;
import Spring_Book.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.Map;

@Transactional
@Service
public class UserSerivce implements UserRepo {
    private final String USER_CACHE = "USER";

    @Autowired
    RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, Long, Person> hashOperations;

    @Autowired
    private UserDetailsRepository userRepository;

    @PostConstruct
    private void intializeHashOperations() {
        hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public void save(final Person person) {
//        hashOperations.put(BOOK_CACHE, book.getId(), book);
        userRepository.save(person);
    }

    //Save to Cache operation
    private void saveToCache(final Person person){
        hashOperations.put(USER_CACHE, person.getId(), person);
    }

    //get a person by Id
    private Person getPerson(Long id){
        Person user = null;
        try{
            user = this.userRepository.findById(id)
                    .orElseThrow(() -> new Exception("Person not found for this id "+ id));
        }catch (Exception e){
            e.printStackTrace();
        }
        return user;
    }

    // Find by person id operation.
    @Override
    public Person findById(final Long id) {
        Person user = (Person) hashOperations.get(USER_CACHE, id);
        if (user != null){
            return user;
        }else{
            Person person1 = this.getPerson(id);
            saveToCache(person1);
            return person1;
        }
    }

    // Find all users operation.
    @Override
    public Map<Long, Person> findAll() {
        return hashOperations.entries(USER_CACHE);
    }

    // Delete employee by id operation.
    @Override
    public void delete(Long id) {
        hashOperations.delete(USER_CACHE, id);
        userRepository.delete(getPerson(id));
    }

    @Override
    public void deleteFromRedis(Long id) {
        hashOperations.delete(USER_CACHE, id);
    }
}
