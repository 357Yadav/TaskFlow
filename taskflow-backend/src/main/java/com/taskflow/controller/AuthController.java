package com.taskflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.taskflow.dto.LoginRequest;
import com.taskflow.dto.LoginResponse;
import com.taskflow.dto.RegisterRequest;
import com.taskflow.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        System.out.println("========== REGISTER API HIT ==========");
        System.out.println("Email : " + request.getEmail());

        String response = userService.register(request);

        System.out.println("========== REGISTER SUCCESS ==========");

        return response;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        System.out.println("========== LOGIN API HIT ==========");
        System.out.println("Email : " + request.getEmail());

        LoginResponse response = userService.login(request);

        System.out.println("========== LOGIN SUCCESS ==========");

        return response;
    }
}