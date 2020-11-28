import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { from } from 'rxjs';
import { CadastrocliComponent } from './cadastrocli/cadastrocli.component';
import { InfopessoaisComponent } from './infopessoais/infopessoais.component';
import { MetpagComponent } from './metpag/metpag.component';
import { OfertasComponent } from './ofertas/ofertas.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrocliComponent,
    InfopessoaisComponent,
    MetpagComponent,
    OfertasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
