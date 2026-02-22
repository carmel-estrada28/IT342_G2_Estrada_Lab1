package com.estrada.labthree.repository

import com.estrada.labthree.api.RetrofitInstance
import com.estrada.labthree.models.LoginRequest
import com.estrada.labthree.models.RegisterRequest

class AuthRepository {

    suspend fun register(username: String, email: String, password: String) =
        RetrofitInstance.api.register(RegisterRequest(username, email, password))

    suspend fun login(username: String, password: String) =
        RetrofitInstance.api.login(LoginRequest(username, password))

    suspend fun logout() =
        RetrofitInstance.api.logout()

    suspend fun getProfile() =
        RetrofitInstance.api.getProfile()
}
