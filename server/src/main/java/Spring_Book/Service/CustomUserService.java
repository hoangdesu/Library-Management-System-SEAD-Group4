package Spring_Book.Service;

import Spring_Book.Model.Person;
import Spring_Book.Repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// userDetailsService new update manual class.
@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    UserDetailsRepository userDetailsRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub

        Person user=userDetailsRepository.findByUserName(username);

        if(null==user) {
            throw new UsernameNotFoundException("User Not Found with username "+username);
        }
        return user;
    }

}
