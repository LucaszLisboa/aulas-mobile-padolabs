package com.example.digitallockingpado

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class Fde600WPage : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fde600_wpage)

        val btnComprar = findViewById<Button>(R.id.btnComprar)

        btnComprar.setOnClickListener(){
            Toast.makeText(this, "Ainda não implementado!", Toast.LENGTH_SHORT).show()


        }
    }
}