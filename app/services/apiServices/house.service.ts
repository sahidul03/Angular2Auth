import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from '../authServices/auth.service';

@Injectable()

export class HouseService {
    private  rootApiUrl: string;
    private _isLoggedIn: boolean;
    private headers: any;

    constructor(private http: Http, private _AuthServices: AuthService){
        this._isLoggedIn = this._AuthServices.isLoggedIn();
        console.log('HouseService initialized......');
        this.rootApiUrl = this._AuthServices.rootApi();
        this.headers = this._AuthServices.getHeaders();

    }

    getHouses(){
        return this.http.get( this.rootApiUrl + 'api/houses', {headers: this.headers})
            .map(response => {
                return response;
            },
                error => {
                return error;
            }
        );
    }

}
