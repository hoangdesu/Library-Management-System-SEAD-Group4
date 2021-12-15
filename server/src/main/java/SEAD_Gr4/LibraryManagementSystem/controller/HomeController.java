package SEAD_Gr4.LibraryManagementSystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {

    @GetMapping("/*")
    public String sayHi() {
        return "Hi, welcome to Library Management System server";
    }
}
