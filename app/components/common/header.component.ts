import { Component } from '@angular/core';
import { AuthService } from '../../services/authServices/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{
    constructor(private _AuthService: AuthService){

    }

    isAuthenticated(){
      console.log(this._AuthService.isLoggedIn());
      return this._AuthService.isLoggedIn();
    }

    logOut(){
      this._AuthService.logOut();
    }

}
