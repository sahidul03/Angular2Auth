import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
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

    constructor(
        private _HouseService: HouseService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.getSingleHouse(this.id);
    }

    goBack(): void {
        this.location.back();
    }

    getSingleHouse(id){
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