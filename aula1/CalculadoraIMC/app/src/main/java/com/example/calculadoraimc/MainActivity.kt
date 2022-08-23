package com.example.calculadoraimc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val txtPeso = findViewById<EditText>(R.id.textPeso)
        val txtAltura = findViewById<EditText>(R.id.textPeso)
        val btnCalcular = findViewById<Button>(R.id.btnCalcular)
        val textIMC = findViewById<TextView>(R.id.textIMC)

        btnCalcular.setOnClickListener(){
            if(txtPeso.text.isEmpty() || txtAltura.text.isEmpty()){
                textIMC.text = "Por favor, informe seus dados!"
            }else{

            }
        }
    }
}