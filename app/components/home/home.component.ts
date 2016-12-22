import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'

})

export class HomeComponent {
    message: string;
    constructor(){
        this.message = "Welcome to Angular2 auth! :)";

    }
}