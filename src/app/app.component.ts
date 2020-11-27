import { Component } from '@angular/core';
import { from } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GaLuGa';
  opened=false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'galuga',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/p.svg'))
  }
}
