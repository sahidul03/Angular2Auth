import { Component } from '@angular/core';
import { HouseService } from '../../../services/apiServices/house.service'

@Component({
    moduleId: module.id,
    selector: 'newHouse',
    templateUrl: 'newHouse.component.html'

})

export class NewHouseComponent {
    form: any;
    houseCategories: any;

    constructor(private _HouseService: HouseService){
        this.form = {
            isFurnished: false,
            ad_type: 'rent',
            house_category_id: '',
            bed_room: 1,
            total_room: 1,
            bathroom: 1,
            balcony: 0,
            car_parking: 0,
            living_area: 200,
            land_size: 200,
            floor: 1,
            total_floor: 1,
            rent: 500
        };
        this.getHouseCategories();
    }

    getHouseCategories(){
        this._HouseService.getHouseCategories().subscribe(
                response =>  {
                console.log(response.json());
                this.houseCategories = response.json();
                if(this.houseCategories.length > 0){
                    this.form.house_category_id = this.houseCategories[0].id;
                }
            },
                error => {
                console.log(error.json());
            },
            function() { console.log("Getting all house categories")}
        );
    }

    submitHouse(){
        console.log(this.form);
    }
}