import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from '../../../services/apiServices/house.service'
import { NotificationsService, PushNotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'

})

export class DashboardComponent {
    houses: any;
    constructor(private _HouseService: HouseService){
        this.getMyHouses();
    }

    getMyHouses(){
        this._HouseService.getMyHouses().subscribe(
                response =>  {
                console.log(response.json());
                this.houses = response.json();
            },
                error => {
                console.log(error.json());
            },
            function() { console.log("Getting all of my houses")}
        );
    }
}
