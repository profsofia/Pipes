import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
  transform(valor : string, enMayusculas : boolean = true):string{
    //return valor.toUpperCase();
   return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
  }

}
