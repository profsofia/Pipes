import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

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
  //keyValue Pipe
  persona={
    nombre:'Sofia',
    direccion:'Argentina, Buenos Aires',
    edad:29
  }
  //Json Pipe
  heroes =[
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Iroman',
      vuela: true
    },
    {
      nombre:'Linterna Verde',
      vuela: false
    }
  ]
  //Async Pipe
  //Esto es un observable que está emitiendo numeros, desde el cero... cada 3 segundos
  miObservable = interval(1000);
  losdiezprimeros = this.miObservable.pipe(take(11));

  //promesa
  miPromesa = new Promise((resolve, rejet)=>{
    setTimeout(() => {
      resolve('Tenemos los datos de la promesa...')
    }, 3500);
  })
}
