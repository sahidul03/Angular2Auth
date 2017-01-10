import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, params, ActivatedRoute } from '@angular/router';
import { HouseService } from '../../../services/apiServices/house.service'
import { NotificationsService, PushNotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'editHouse',
    templateUrl: 'editHouse.component.html'

})

export class EditHouseComponent implements OnInit{
    form: any;
    houseCategories: any;
    errors: any;
    formSubmitFlag: boolean;
    id: string;

    constructor(private _HouseService: HouseService,
                private _Router: Router,
                private _NotificationsService: NotificationsService,
                private _pushNotifications: PushNotificationsService,
                private _ActivatedRoute: ActivatedRoute){
        //this.form = {
        //    isFurnished: false,
        //    ad_type: 'rent',
        //    house_category_id: '',
        //    bed_room: 1,
        //    total_room: 1,
        //    bathroom: 1,
        //    balcony: 0,
        //    car_parking: 0,
        //    living_area: 200,
        //    land_size: 200,
        //    floor: 1,
        //    total_floor: 1,
        //    rent: 500
        //};
        this.formSubmitFlag = true;
        this.getHouseCategories();
    }

    ngOnInit(): void {
        this.id = this._ActivatedRoute.snapshot.params['id'];
        this.getSingleHouse(this.id);
    }


    getSingleHouse(id){
        this._HouseService.getSingleHouse(this.id).subscribe(
                response =>  {
                console.log(response.json());
                this.form = response.json();
            },
                error => {
                console.log(error.json());
            },
            function() { console.log("Getting single house")}
        );
    }

    getHouseCategories(){
        this._HouseService.getHouseCategories().subscribe(
                response =>  {
                console.log(response.json());
                this.houseCategories = response.json();
                //if(this.houseCategories.length > 0){
                //    this.form.house_category_id = this.houseCategories[0].id;
                //}
            },
                error => {
                console.log(error.json());
            },
            function() { console.log("Getting all house categories")}
        );
    }

    submitHouse(){
        console.log(this.form);
        this.formSubmitFlag = false;
        this._HouseService.updateHouse(this.id, this.form).subscribe(
                response =>  {
                console.log(response.json());
                this.formSubmitFlag = true;
                this._Router.navigate(['/dashboard']);
                this._NotificationsService.success(
                    'Successfully updated house',
                    response.json().title,
                    {
                        timeOut: 5000,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true,
                        maxLength: 0
                    }
                );
                //this._pushNotifications.create('Successfully created new house', {body: response.json().title}).subscribe(
                //        res => console.log(res),
                //        err => console.log(err)
                //)
            },
                error => {
                this.formSubmitFlag = true;
                this.errors = error.json();
                console.log(error.json());
            },
            function() { console.log("Getting all houses")}
        );
    }
}
