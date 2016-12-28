import { Component } from '@angular/core';
import { HouseService } from '../../services/apiServices/house.service'

@Component({
    moduleId: module.id,
    selector: 'get-houses',
    templateUrl: 'getHouses.component.html'

})

export class GetHousesComponent {
    message: string;
    houses: any;
    constructor(private _HouseService: HouseService){
        this.getHouses();
    }

    getHouses(){
        this._HouseService.getHouses().subscribe(
                response =>  {
                    console.log(response.json());
                this.houses = response.json();
            },
                error => {
                console.log(error.json());
            },
            function() { console.log("Geting all houses")}
        );
    }

}