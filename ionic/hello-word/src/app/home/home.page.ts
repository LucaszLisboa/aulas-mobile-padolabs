import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CidadesService } from "../cidades.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  Cidades: object;
  
  constructor(
    private router: Router,
    private CidadesService: CidadesService,
    ) {
      this.Cidades = [];
    }

  ngOnInit() {
    this.CidadesService.BuscarCidades().subscribe(data => {
      console.log(data);
      this.Cidades = data;
    })
  }

  goToPage(Cidade){
    console.log(Cidade);
    this.router.navigate(["/cidades"], {state: {data: Cidade}});
  }

}
