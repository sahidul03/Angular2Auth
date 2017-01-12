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
    activeDeleteHouse: any;

    constructor(private _HouseService: HouseService, private _NotificationsService: NotificationsService){
        this.getMyHouses();
    }

    setDeleteId(house: any){
        this.activeDeleteHouse = house;
    }

    deleteHouse(){
        this._HouseService.deleteHouse(this.activeDeleteHouse.id).subscribe(
                response =>  {
                console.log(response.json());
                   var index = this.houses.indexOf(this.activeDeleteHouse);
                    if (index > -1) {
                        this.houses.splice(index, 1);
                    }
                this._NotificationsService.success(
                    'Deleted',
                    'Successfully deleted this house.',
                    {
                        timeOut: 5000,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true,
                        maxLength: 0
                    }
                );
            },
                error => {
                console.log(error.json());
                    this._NotificationsService.success(
                        'Something went wrong!',
                        'House was not deleted...',
                        {
                            timeOut: 5000,
                            showProgressBar: true,
                            pauseOnHover: true,
                            clickToClose: true,
                            maxLength: 0
                        }
                    );
            },
            function() { console.log("Getting all houses")}
        );
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
