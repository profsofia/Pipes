import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombre : string ='sofia SCHENONE';
  fechaHoy : number = Date.now(); //fecha de hoy

}
