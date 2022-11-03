import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage implements OnInit {
  Cidade: object;

  constructor() { 
    this.Cidade = [];
  }

  ngOnInit() {
    this.Cidade = history.state.dados;
    console.log(this.Cidade);
  }

}
