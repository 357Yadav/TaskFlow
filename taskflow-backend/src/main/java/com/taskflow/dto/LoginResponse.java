package com.taskflow.dto;

public class LoginResponse {

    private String token;

    // Default Constructor
    public LoginResponse() {
    }

    // Constructor with token
    public LoginResponse(String token) {
        this.token = token;
    }

    // Getter
    public String getToken() {
        return token;
    }

    // Setter
    public void setToken(String token) {
        this.token = token;
    }
}