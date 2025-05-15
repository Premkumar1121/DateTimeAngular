import { Component } from '@angular/core';
import { TimezoneComponent } from './timezone/timezone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimezoneComponent],
  template: `<app-timezone></app-timezone>`,
})
export class AppComponent {}