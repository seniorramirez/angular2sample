import { Component, OnInit,Injectable } from '@angular/core';
import { Prueba } from '../model/prueba';
import { PruebaService } from '../services/prueba.service';



@Component({
  selector: 'my-prueba',
  templateUrl: 'src/app/template/prueba.component.html',
  styles:['.primary:{background-color:blue;} .danger{background-color:red;}']
})

export class PruebaComponent implements OnInit{
  ARRPRUEBA: Prueba[] = [];
  prueba: string;
   constructor(private pruebaService:PruebaService){}
  ngOnInit():void{
    this.pruebaService.getPrueba()
                      .then(arrprueba => this.ARRPRUEBA = arrprueba);
  }
}
