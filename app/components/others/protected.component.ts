import { Component, OnInit } from '@angular/core';
import { NotificationsService, PushNotificationsService } from 'angular2-notifications';
import { AgmCoreModule, MouseEvent } from 'angular2-google-maps/core';


@Component({
    moduleId: module.id,
    selector: 'protected',
    templateUrl: 'protected.component.html'
})

export class ProtectedComponent  implements OnInit{
    currgeocoder: any;
    // google maps zoom level
    zoom: number = 14;
    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;
    markers: marker[] = [
      //{
      //    lat: 51.673858,
      //    lng: 7.815982,
      //    label: 'A',
      //    draggable: true
      //}
    ];

    constructor(private _NotificationsService: NotificationsService, private _pushNotifications: PushNotificationsService){

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
      this.initializeCurrent($event.coords.lat, $event.coords.lng);
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
      this.initializeCurrent(position.coords.latitude, position.coords.longitude);
    }

    //Check value is present or
    initializeCurrent(latcurr, longcurr) {
      this.currgeocoder = new google.maps.Geocoder();
      console.log(latcurr + "-- ######## --" + longcurr);
      if (latcurr != '' && longcurr != '') {
        //call google api function
        var myLatlng = new google.maps.LatLng(latcurr, longcurr);
        return this.getCurrentAddress(myLatlng);
      }
    }

    //Get current address
    getCurrentAddress(location) {
      this.currgeocoder.geocode({
        'location': location
      }, function (results, status) {
        console.log(results)
        if (status == google.maps.GeocoderStatus.OK) {
          console.log(results);
          var fAddress = results[0].address_components[0].long_name + ', ' +
            results[0].address_components[1].long_name + ', ' +
            results[1].address_components[0].long_name + ', ' +
            results[1].address_components[1].long_name + ', ' +
            results[2].formatted_address;
          $("#address").html( fAddress );
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

}

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
