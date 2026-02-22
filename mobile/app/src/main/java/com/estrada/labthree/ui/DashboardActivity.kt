package com.estrada.labthree.ui

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.estrada.labthree.R
import com.estrada.labthree.repository.AuthRepository
import com.estrada.labthree.utils.TokenManager
import kotlinx.coroutines.launch

class DashboardActivity : AppCompatActivity() {

    private val repository = AuthRepository()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dashboard)

        val tvUsername = findViewById<TextView>(R.id.tvUsername)
        val tvEmail    = findViewById<TextView>(R.id.tvEmail)
        val btnLogout  = findViewById<Button>(R.id.btnLogout)

        // Load profile
        lifecycleScope.launch {
            try {
                val response = repository.getProfile()
                if (response.isSuccessful) {
                    val body = response.body()
                    tvUsername.text = "Username: ${body?.get("username")}"
                    tvEmail.text    = "Email: ${body?.get("email")}"
                } else {
                    Toast.makeText(this@DashboardActivity, "Session expired. Please login again.", Toast.LENGTH_SHORT).show()
                    goToLogin()
                }
            } catch (e: Exception) {
                Toast.makeText(this@DashboardActivity, "Error: ${e.message}", Toast.LENGTH_LONG).show()
            }
        }

        btnLogout.setOnClickListener {
            lifecycleScope.launch {
                try {
                    repository.logout()
                } catch (e: Exception) {
                    // Ignore, still clear session
                }
                TokenManager.logout()
                goToLogin()
            }
        }
    }

    private fun goToLogin() {
        startActivity(Intent(this, LoginActivity::class.java))
        finish()
    }
}
