import { Component, OnInit } from '@angular/core';
import { AuthService } from'../../services/authServices/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signin',
    templateUrl: 'signin.component.html'
})

export class SignInComponent{
    email: string;
    password: string;

    constructor(private _AuthService: AuthService) {
        this.email = '';
        this.password = '';
    }

    onSignin() {
        var loginInfo = { email: this.email, password: this.password };
        this._AuthService.login(loginInfo).subscribe(res => {
            console.log(res);

        })
    }
}