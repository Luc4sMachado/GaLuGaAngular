import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialComponents =[
 
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule
];

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
