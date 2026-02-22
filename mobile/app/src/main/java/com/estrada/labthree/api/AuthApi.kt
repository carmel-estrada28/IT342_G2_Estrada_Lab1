package com.estrada.labthree.api

import com.estrada.labthree.models.AuthResponse
import com.estrada.labthree.models.LoginRequest
import com.estrada.labthree.models.RegisterRequest
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

interface AuthApi {

    @POST("api/auth/register")
    suspend fun register(@Body request: RegisterRequest): Response<AuthResponse>

    @POST("api/auth/login")
    suspend fun login(@Body request: LoginRequest): Response<AuthResponse>

    @POST("api/auth/logout")
    suspend fun logout(): Response<AuthResponse>

    @GET("api/auth/profile")
    suspend fun getProfile(): Response<Map<String, String>>
}
