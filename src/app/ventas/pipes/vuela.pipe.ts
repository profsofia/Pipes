

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'vuela'})
export class Vuela implements PipeTransform {
    transform(vuela : boolean): string {
        return vuela ? 'vuela': 'no vuela';
        console.log(vuela);
    }
}
