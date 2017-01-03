import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{
    loggedInUserInfo: any;

    constructor(private _AuthService: AuthService, private _Router: Router){
    }

    isAuthenticated(){
      console.log(this._AuthService.isLoggedIn());
        this.loggedInUserInfo = this._AuthService.loggedInUserInfo;
      return this._AuthService.isLoggedIn();
    }

    serverRespondsFirstTime(){
        return this._AuthService.serverRespondsFirstTime();
    }

    logOut(){
        console.log("logout clicked");
        this._AuthService.logOut().subscribe(res => {
            this._Router.navigate(['/signin']);
        })
    }

}
