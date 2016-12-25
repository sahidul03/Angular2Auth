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
        console.log(this._AuthService.isAuthenticated());
        if(this._AuthService.isAuthenticated()){
            return this._AuthService.isAuthenticated();
        }else{
            this._Router.navigate(['/signin']);
            return false;
        }
    }


}
