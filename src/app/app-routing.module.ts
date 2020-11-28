import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfopessoaisComponent } from './infopessoais/infopessoais.component';
import { MetpagComponent } from './metpag/metpag.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import {CadastrocliComponent} from './cadastrocli/cadastrocli.component';
  import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: OfertasComponent},
  {path: 'cadastrocli', component: CadastrocliComponent},
  {path: 'infopessoais', component: InfopessoaisComponent},
  {path: 'metpag', component: MetpagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
