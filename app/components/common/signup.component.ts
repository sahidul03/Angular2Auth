import { Component, OnInit } from "@angular/core";
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

    constructor(private _AuthService: AuthService) {
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
        this._AuthService.signUp(signupInfo).subscribe(res => {
            console.log(res);
        })
    }

    ngOnInit(): any {}
}