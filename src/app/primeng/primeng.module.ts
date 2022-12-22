import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//prime ng
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  exports:[
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimengModule { }
