import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-house-list',
    templateUrl: 'dashboardHouseList.component.html'

})

export class DashboardHouseListComponent {
    @Input() house: any;
    @Output() setDeleteId = new EventEmitter<any>();

    setDeleteIdFromChild(house: any) {
        this.setDeleteId.emit(house);
    }

    constructor(){
    }
}