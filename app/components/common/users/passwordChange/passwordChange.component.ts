import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from'../../../../services/authServices/auth.service';

@Component({
    moduleId: module.id,
    selector: 'passwordChange',
    templateUrl: 'passwordChange.component.html'
})

export class PasswordChangeComponent {
    current_password: string;
    password: string;
    password_confirmation: string;
    errors: any;

    constructor(private _AuthService: AuthService, private _Router: Router) {
        this.current_password = '';
        this.password = '';
        this.password_confirmation = '';
        this.errors = []
    }

    onChangePassword() {
        var passwordInfo = { current_password: this.current_password, password: this.password, password_confirmation: this.password_confirmation };

        this._AuthService.changePassword(passwordInfo).subscribe(
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

