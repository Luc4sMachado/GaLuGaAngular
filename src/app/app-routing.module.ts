import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CadastrocliComponent} from './cadastrocli/cadastrocli.component';
  import { from } from 'rxjs';

const routes: Routes = [
  {path: 'cadastrocli', component: CadastrocliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
