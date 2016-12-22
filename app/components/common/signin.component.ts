import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from'../../services/authServices/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signin',
    templateUrl: 'signin.component.html'
})

export class SignInComponent {
    email: string;
    password: string;
    errors: any;

    constructor(private _AuthService: AuthService, private _Router: Router) {
        this.email = '';
        this.password = '';
        this.errors = []
    }

    onSignin() {
        var loginInfo = { email: this.email, password: this.password };

        this._AuthService.login(loginInfo).subscribe(
            response =>  {
                console.log("Success Response " + response);
                console.log(response);
                this._Router.navigate(['/']);
            },
            error => {
                console.log("Error happened " + error);
                this.errors = error.json().errors;
                console.log(error.json());
            },
            function() { console.log("the subscription is completed")}
        );
    }
}

