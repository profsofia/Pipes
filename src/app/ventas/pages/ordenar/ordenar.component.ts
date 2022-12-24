import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {
 heroes : Heroes[] =[
  {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Thor',
    vuela: false,
    color: Color.amarillo
  },
  {
    nombre: 'Iroman',
    vuela: true,
    color: Color.rojo
  },
 ]

  estaEnMayus : boolean = true;
  texto : string = 'sOfia SchenONE';
 convertirAMayusc(){

  (this.estaEnMayus) ? this.estaEnMayus = false: this.estaEnMayus = true;
  //console.log('convirtiendo');
 }


 // arreglo de heroes!
}
