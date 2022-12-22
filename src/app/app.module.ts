import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../app/shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la app
import localEsAr from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsAr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    VentasModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
