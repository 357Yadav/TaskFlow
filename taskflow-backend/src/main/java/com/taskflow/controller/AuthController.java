package com.taskflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.taskflow.dto.LoginRequest;
import com.taskflow.dto.LoginResponse;
import com.taskflow.dto.RegisterRequest;
import com.taskflow.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    // Register User
    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        System.out.println("========== REGISTER API HIT ==========");

        return userService.register(request);
    }

    // Login User
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        System.out.println("========== LOGIN API HIT ==========");
        System.out.println("Email : " + request.getEmail());

        LoginResponse response = userService.login(request);

        System.out.println("========== LOGIN SUCCESS ==========");

        return response;
    }

}