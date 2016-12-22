import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../authServices/auth.service';

@Injectable()
export class SignInGuard implements CanActivate {
    constructor(private _AuthService: AuthService, private _Router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|boolean {
        console.log('sign in guard '+ this._AuthService.isLoggedIn())
        if(this._AuthService.isLoggedIn()){
            this._Router.navigate(['/']);
            return false
        }else{
            return true;
        }
    }


}