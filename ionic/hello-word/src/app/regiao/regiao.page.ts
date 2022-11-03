import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.page.html',
  styleUrls: ['./regiao.page.scss'],
})
export class RegiaoPage implements OnInit {

  constructor(private router: Router) { }

  goToPage(){
    this.router.navigate(["/perfil"])
  }

  goToPageRegion(regiao){
    console.log(regiao)
    this.router.navigate(["/home"], {state: {dados: regiao}}) 
  }

  ngOnInit() {
  }

}
