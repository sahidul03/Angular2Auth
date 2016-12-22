import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../authServices/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _AuthService: AuthService, private _Router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|boolean {
        //return true;
        console.log(this._AuthService.isLoggedIn());
        if(this._AuthService.isLoggedIn()){
            return this._AuthService.isLoggedIn();
        }else{
            this._Router.navigate(['/signin']);
            return false;
        }
    }


}