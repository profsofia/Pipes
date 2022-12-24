import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroes[], ordenarPor : string = 'sin valor'): Heroes[] {

    /*heroes.sort(function (a, b) {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });*/
    switch(ordenarPor){
      case 'nombre':
        return heroes.sort((a,b)=>(a.nombre > b.nombre)? 1: -1)
      case 'vuela':
          return heroes.sort((a,b)=>(a.vuela > b.vuela)? -1: 1)

      case 'color':
            return heroes.sort((a,b)=>(a.color > b.color)? 1: -1)



      default:
        return heroes;
     }
  /*
    if(ordenarPor === 'sin valor'){
    return heroes;
  }else{
    return heroes.sort((a,b)=>(a.nombre > b.nombre)? 1: -1)
    //return heroes;
  }
*/


  }

}
