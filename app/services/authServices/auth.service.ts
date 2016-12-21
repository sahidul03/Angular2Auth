import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService {
    rootApiUrl: string;
    private _isLoggedIn: boolean;


    constructor(private http: Http){
        this._isLoggedIn = false;
        console.log('AuthService initialized......');
        this.rootApiUrl = 'http://localhost:5000/';
        this.http.get( this.rootApiUrl + 'auth/validate_token', { headers: this.getHeaders() })
            .subscribe(res => {
                console.log(res);
                this._isLoggedIn = true;
            });
    }

    getHeaders(){
        var authData = JSON.parse(localStorage.getItem('authData'));
        var headers = new Headers({
            "access-token": authData['access-token'],
            "client": authData.client,
            "uid": authData.uid
        });
        headers.append('Content-Type','application/json');
        return headers;
    }


    login(loginInfo: any){
        return this.http.post( this.rootApiUrl + 'auth/sign_in', { email: loginInfo.email, password: loginInfo.password })
            .map(response => {
                this._isLoggedIn = true;
                var authData = {
                    "access-token": response.headers.get('access-token'),
                    "client": response.headers.get('client'),
                    "expiry": response.headers.get('expiry'),
                    "token-type": response.headers.get('token-type'),
                    "uid": response.headers.get('uid')
                };
                localStorage.setItem('authData', JSON.stringify(authData));
                //localStorage.setItem('isAuthenticated', JSON.stringify(true));
                console.log(authData);
            });
    }

    signUp(signupInfo: any){
        console.log(signupInfo);
        return this.http.post( this.rootApiUrl + 'auth', signupInfo)
            .map(response => {
                this._isLoggedIn = true;
                var authData = {
                    "access-token": response.headers.get('access-token'),
                    "client": response.headers.get('client'),
                    "expiry": response.headers.get('expiry'),
                    "token-type": response.headers.get('token-type'),
                    "uid": response.headers.get('uid')
                };
                localStorage.setItem('authData', JSON.stringify(authData));
                this._isLoggedIn =
                //localStorage.setItem('isAuthenticated', JSON.stringify(true));
                console.log(authData);
            });
    }

    isLoggedIn(){
        return this._isLoggedIn;
    }

}