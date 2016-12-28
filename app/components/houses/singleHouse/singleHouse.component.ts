import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../../services/apiServices/house.service'

@Component({
    moduleId: module.id,
    selector: 'single-houses',
    templateUrl: 'singleHouse.component.html'

})

export class SingleHouseComponent implements OnInit{
    message: string;
    id: string;
    house: any;
    constructor(private _HouseService: HouseService, private _ActivatedRoute: ActivatedRoute){

    }

    ngOnInit() {
        this._ActivatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.getSingleHouse(this.id);
            console.log(this.id);
        });
    }

    getSingleHouse(){
        this._HouseService.getSingleHouse(this.id).subscribe(
                response =>  {
                console.log(response.json());
                this.house = response.json();
            },
                error => {
                console.log(error.json());
            },
            function() { console.log("Getting single house")}
        );
    }

}