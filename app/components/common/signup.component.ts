import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from '../../services/authServices/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html'
})

export class SignUpComponent{
    email: string;
    password: string;
    password_confirmation: string;
    errors: any;

    constructor(private _AuthService: AuthService, private _Router: Router) {
        this.email = '';
        this.password = '';
        this.password_confirmation = '';
    }

    onSignup() {
        var signupInfo = {
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation
        };
        this._AuthService.signUp(signupInfo).subscribe(
                response =>  {
                console.log("Success Response " + response);
                console.log(response);
                    this._Router.navigate(['/']);
            },
                error => {
                console.log("Error happened " + error);
                this.errors = error.json().errors;
                console.log(this.errors);
            },
            function() { console.log("the subscription is completed")}
        );
    }

    ngOnInit(): void {

    }
}