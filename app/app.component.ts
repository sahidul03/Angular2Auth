import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <my-header></my-header>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
