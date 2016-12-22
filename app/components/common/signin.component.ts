import { Component, OnInit } from '@angular/core';
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

    constructor(private _AuthService: AuthService) {
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

