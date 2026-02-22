package com.estrada.labthree.models

data class AuthResponse(
    val message: String? = null,
    val error: String? = null
)

data class LoginRequest(
    val username: String,
    val password: String
)

data class RegisterRequest(
    val username: String,
    val email: String,
    val password: String
)

data class User(
    val username: String,
    val email: String
)
