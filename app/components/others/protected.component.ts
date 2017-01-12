import { Component, OnInit } from '@angular/core';
import { NotificationsService, PushNotificationsService } from 'angular2-notifications';
import { AgmCoreModule, MouseEvent } from 'angular2-google-maps/core';


@Component({
    moduleId: module.id,
    selector: 'protected',
    templateUrl: 'protected.component.html'
})

export class ProtectedComponent  implements OnInit{

    // google maps zoom level
    zoom: number = 14;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    markers: marker[] = [
        //{
        //    lat: 51.673858,
        //    lng: 7.815982,
        //    label: 'A',
        //    draggable: true
        //},
        //{
        //    lat: 51.373858,
        //    lng: 7.215982,
        //    label: 'B',
        //    draggable: false
        //},
        //{
        //    lat: 51.723858,
        //    lng: 7.895982,
        //    label: 'C',
        //    draggable: true
        //}
    ];

    constructor(private _NotificationsService: NotificationsService, private _pushNotifications: PushNotificationsService){

    }

  setPosition(position){
    var centerPoint = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      label: 'A',
      draggable: true
    };
    this.markers.push(centerPoint);
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }

    ngOnInit(){
        this._pushNotifications.requestPermission();
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
        );
      if(!!navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));

      }
    }


}

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
