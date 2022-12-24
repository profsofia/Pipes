

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'color'})
export class Color implements PipeTransform {
// rojo, verde, azul, amarillo, negro

    transform(numero : number) {
        switch(numero){
            case 0:
                return 'rojo';
            case 1:
                return'verde';
            case 2:
                return 'azul';
            case 3:
                return 'amarillo';
            case 4:
                return 'negro';
        }
        return ;

    }
}
