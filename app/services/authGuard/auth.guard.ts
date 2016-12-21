import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../authServices/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _AuthService: AuthService){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|boolean {
        //return true;
        console.log(this._AuthService.isLoggedIn());
        return this._AuthService.isLoggedIn();
    }


}