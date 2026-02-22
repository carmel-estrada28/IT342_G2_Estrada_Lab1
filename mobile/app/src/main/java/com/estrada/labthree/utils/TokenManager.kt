package com.estrada.labthree.utils

import com.estrada.labthree.api.RetrofitInstance

object TokenManager {
    private var isLoggedIn = false

    fun setLoggedIn(value: Boolean) {
        isLoggedIn = value
    }

    fun isLoggedIn() = isLoggedIn

    fun logout() {
        isLoggedIn = false
        RetrofitInstance.clearCookies()
    }
}
