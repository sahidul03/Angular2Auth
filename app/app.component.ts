import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <my-header></my-header>
  <div class="container">
    <simple-notifications [options]="options">
    </simple-notifications>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent  {
  name = 'Angular';
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
  };

}
