import { Injectable } from '@angular/core';
import { Prueba } from '../model/prueba';

@Injectable()
export class PruebaService {
  getPrueba(): Promise<Prueba[]> {
    var arrInteractue:object[] = [];
    let arrPromise = [];
    function processPromise(data){
      console.info(data);
      return Promise.resolve(data);
    }
    for(var i =0;i<1000;i++){
      arrPromise.push(this.setrow());
    }
     Promise.all(arrPromise).then(data => processPromise(data));
  }
  setrow(): Promise<object>{
    var objPush = {};
    let arrPromise = [];
    for(var j=1;j<11;j++){
      var color: string = "";
      var name: string = "";
      if( Math.floor((Math.random() * 2)) == 1){
        color = "primary";
      }else{
        color = "danger";
      }
      name = "Prueba"+j;
      arrPromise.push(this.getText(j));
    }
    function processPromise(data){
      console.info(data);
      return;
      return Promise.resolve(data);
    }
    Promise.all(arrPromise).then(data => processPromise(data));
  }
  getText(position:number): Promise<string>{
    var stringReturn : string;
    if(position == 1){
      return Promise.resolve("primero");
    }
    if(position == 2){
      return Promise.resolve("segundo");
    }
    if(position == 3){
      return Promise.resolve("tercero");
    }
    if(position == 4){
      return Promise.resolve("cuarto");
    }
    if(position == 5){
      return Promise.resolve("quinto");
    }
    if(position == 6){
      return Promise.resolve("sexto");
    }
    if(position == 7){
      return Promise.resolve("septimo");
    }
    if(position == 8){
      return Promise.resolve("octavo");
    }
    if(position == 9){
      return Promise.resolve("noveno");
    }
    if(position == 10){
      return Promise.resolve("decimo");
    }

  }
}
