import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //i18nSelect
  nombre = 'Sofia';
  genero = 'femenino';

  pipeMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //u18nPlural
  clientes: string[] = ['Maria', 'juan', 'pedro'];
  pluralMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'

  }
  //métodos
  cambiarPersona(){
    if(this.nombre =='Carlos'){
      alert('Ya cambiaste el nombre');
    }
    this.nombre = 'Carlos';
    this.genero = 'masculino';

  }
  eliminarCliente(){
    this.clientes.pop();
  }
}
