package Spring_Book.Controller;

import Spring_Book.Config.JWTTokenHelper;
import Spring_Book.Model.Authority;
import Spring_Book.Model.Person;
import Spring_Book.Repository.UserRepo;
import Spring_Book.Request.AuthenticationRequest;
import Spring_Book.Service.CustomUserService;
import Spring_Book.response.LoginResponse;
import Spring_Book.response.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTTokenHelper jWTTokenHelper;

    @Autowired
    private CustomUserService userDetailsService;

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {

        final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authenticationRequest.getUserName(), authenticationRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        Person user=(Person)authentication.getPrincipal();
        String jwtToken=jWTTokenHelper.generateToken(user.getUsername());

        LoginResponse response=new LoginResponse();
        response.setToken(jwtToken);


        return ResponseEntity.ok(response);
    }

    @GetMapping("/auth/userinfo")
    public ResponseEntity<?> getUserInfo(Principal user){
        Person userObj=(Person) userDetailsService.loadUserByUsername(user.getName());

        UserInfo userInfo=new UserInfo();
        userInfo.setFirstName(userObj.getFirstName());
        userInfo.setLastName(userObj.getLastName());
        userInfo.setUserName(userObj.getUserName());
        userInfo.setRoles(userObj.getAuthorities().toArray());


        return ResponseEntity.ok(userInfo);
    }

    @PutMapping("/user")
    public String update(@RequestBody final Person person) {
        Person temp = userRepo.findById(person.getId());
        person.setAuthorities((List<Authority>) temp.getAuthorities());
        person.setEnabled(temp.isEnabled());

        userRepo.deleteFromRedis(person.getId());
        userRepo.save(person);
        return "Update successfully user with id = " + person.getId();
    }

    @GetMapping("/user/getall")
    public Map<Long, Person> findAll() {
        return userRepo.findAll();
    }

    @GetMapping("/user/get/{id}")
    public Person findById(@PathVariable("id") final Long id) {
        return userRepo.findById(id);
    }

    @DeleteMapping("/user/delete/{id}")
    public Map<Long, Person> delete(@PathVariable("id") final Long id) {
        userRepo.delete(id);
        return findAll();
    }
}
