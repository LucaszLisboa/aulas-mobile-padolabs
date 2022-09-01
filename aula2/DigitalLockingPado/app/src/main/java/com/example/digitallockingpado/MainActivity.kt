package com.example.digitallockingpado

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.Toast
import androidx.cardview.widget.CardView
import com.google.android.material.appbar.MaterialToolbar

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val mainToolBar = findViewById<MaterialToolbar>(R.id.mainToolBar)
        val fde600wCard = findViewById<CardView>(R.id.fde600wCard)
        val fde300wCard = findViewById<CardView>(R.id.fde300wCard)

        mainToolBar.setNavigationOnClickListener(){
            Toast.makeText(this, "Hamburguer pressionado!!", Toast.LENGTH_SHORT).show()
            Log.e("app", "menuClick")

        }

        mainToolBar.setOnMenuItemClickListener { menuItem ->
            when (menuItem.itemId){
                R.id.menu_item_notifications -> {
                    Toast.makeText(this, "Ir para a página de notificações!", Toast.LENGTH_SHORT).show()
                    Log.e("notify", "notifications")
                    true
                }

                R.id.menu_item_cart -> {
                    Toast.makeText(this, "Ir para a página do carrinho!", Toast.LENGTH_SHORT).show()
                    Log.e("cart", "carrinho")
                    true
                }

                else -> false
            }
        }

        fde600wCard.setOnClickListener(){
            startActivity(Intent(this, Fde600WPage::class.java))
        }

        fde300wCard.setOnClickListener(){
            startActivity(Intent(this, Fde300WPage::class.java))
        }
    }
}