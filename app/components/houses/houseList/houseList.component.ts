import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'house-list',
    templateUrl: 'houseList.component.html'

})

export class HouseListComponent {
    @Input() house: any;

    constructor(){
    }
}