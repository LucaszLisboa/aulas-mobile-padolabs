import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CidadesService } from "../cidades.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cidades: object;
  regiao: string;
  
  constructor(
    private router: Router,
    private CidadesService: CidadesService,
    ) {
      this.cidades = [];
      this.regiao = '';
    }

  ngOnInit() {
    this.regiao = history.state.dados;

    console.log(history.state);

    this.CidadesService.BuscarCidades(this.regiao).subscribe(data => {
      this.cidades = data;
      console.log(this.cidades);
    })
  }

  goToPage(Cidade){
    console.log(Cidade);
    this.router.navigate(["/cidades"], {state: {dados: Cidade}});
  }

}
