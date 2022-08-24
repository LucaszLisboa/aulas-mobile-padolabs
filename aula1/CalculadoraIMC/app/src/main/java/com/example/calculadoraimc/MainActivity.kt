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
        val txtAltura = findViewById<EditText>(R.id.textAltura)
        val btnCalcular = findViewById<Button>(R.id.btnCalcular)
        val textIMC = findViewById<TextView>(R.id.textIMC)
        val result = findViewById<TextView>(R.id.textResult)
        val btnLimpar = findViewById<Button>(R.id.btnLimpar)

        btnCalcular.setOnClickListener(){

            if(txtPeso.text.isEmpty() || txtAltura.text.isEmpty()){
                textIMC.text = "Por favor, insira os dados corretamente!"
                result.text = ""

            } else{
                if(txtAltura.text.indexOf(".") == 1)
                {
                    val pesoValue = txtPeso.text.toString().toDouble()
                    val alturaValue = txtAltura.text.toString().toDouble()
                    val imcValue = pesoValue/(alturaValue * alturaValue)
                    textIMC.text = "Seu IMC é ${String.format("%.1f", imcValue)}"

                    if(imcValue < 18.5){
                        result.text = "MAGREZA"

                    }else if (imcValue >= 18.5 && imcValue < 22.5){
                        result.text = "NORMAL"

                    }else if (imcValue >= 22.5 && imcValue < 30){
                        result.text = "SOBREPESO"

                    }else if (imcValue >= 30 && imcValue < 40){
                        result.text = "OBESIDADE"

                    }else if (imcValue > 40){
                        result.text = "OBESIDADE GRAVE"
                    }
                }
                else
                {
                    textIMC.text = "Insira altura corretamente!"

                }
            }
        }

        btnLimpar.setOnClickListener(){
            if(txtPeso.text.isEmpty() && txtAltura.text.isEmpty()){
                textIMC.text = "Os dados já estão limpos!"
            }else{
                txtAltura.setText("")
                txtPeso.setText("")
                textIMC.setText("")
                result.setText("")
            }

        }
    }
}