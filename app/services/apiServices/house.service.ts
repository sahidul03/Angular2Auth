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

    getMyHouses(){
        return this.http.get( this.rootApiUrl + 'api/houses/my_houses', {headers: this.headers})
            .map(response => {
                return response;
            },
                error => {
                return error;
            }
        );
    }

    getSingleHouse(id: string){
        return this.http.get( this.rootApiUrl + 'api/houses/' + id, {headers: this.headers})
            .map(response => {
                return response;
            },
                error => {
                return error;
            }
        );
    }

    getHouseCategories(){
        return this.http.get( this.rootApiUrl + 'api/house_categories', {headers: this.headers})
            .map(response => {
                return response;
            },
                error => {
                return error;
            }
        );
    }

    createHouse(data){
      return this.http.post( this.rootApiUrl + 'api/houses', {house: data}, {headers: this.headers})
        .map(response => {
          return response;
        },
          error => {
          return error;
        }
      );
    }

    updateHouse(id: string, data: any){
        return this.http.put(this.rootApiUrl + 'api/houses/' + id, {house: data}, {headers: this.headers})
            .map(response => {
                return response;
            },
                error => {
                return error;
            }
        );
    }

    deleteHouse(id: string){
        return this.http.delete(this.rootApiUrl + 'api/houses/' + id, {headers: this.headers})
            .map(response => {
                return response;
            },
                error => {
                return error;
            }
        );
    }

}
