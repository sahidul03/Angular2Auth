import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{
    constructor(private _AuthService: AuthService, private _Router: Router){

    }

    isAuthenticated(){
      console.log(this._AuthService.isLoggedIn());
      return this._AuthService.isLoggedIn();
    }

    logOut(){
        console.log("logout clicked");
        this._AuthService.logOut().subscribe(res => {
            this._Router.navigate(['/signin']);
        })
    }

}
