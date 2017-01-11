import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
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
                    if(this.form.editable == false){
                        this._Router.navigate(['/dashboard']);
                    }
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
