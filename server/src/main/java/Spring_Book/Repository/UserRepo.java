package Spring_Book.Repository;

import Spring_Book.Model.Person;

import java.util.Map;

public interface UserRepo {
    void save(final Person person);
    Person findById(final Long id);
    Map<Long, Person> findAll();
    void delete(Long id);
    void deleteFromRedis(Long id);
}
