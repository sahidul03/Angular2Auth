import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'protected',
    templateUrl: 'protected.component.html'
})

export class ProtectedComponent  implements OnInit{
    constructor(private _NotificationsService: NotificationsService){

    }

    ngOnInit(){
        this._NotificationsService.success(
            'Protected component',
            'Loading...',
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 0
            }
        )
    }
}