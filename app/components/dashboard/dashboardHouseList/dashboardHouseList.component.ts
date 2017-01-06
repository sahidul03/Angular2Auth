import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-house-list',
    templateUrl: 'dashboardHouseList.component.html'

})

export class DashboardHouseListComponent {
    @Input() house: any;

    constructor(){
    }
}