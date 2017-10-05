import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { MdSnackBar } from '@angular/material';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    email;
    password;

    constructor(
        private af: AngularFire,
        private router: Router,
        private snackBar: MdSnackBar
    ) { }

    ngOnInit() {

    }

    login() {
        this.af.auth.login({
            email: this.email,
            password: this.password
        }).then(res => {
            this.router.navigate(['/']);
        }).catch(error => {
            this.snackBar.open(error.toString(), '', {
                duration: 3000
            });
        });
    }

    googleLogin() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }).then(res => {
            this.router.navigate(['/']);
        }).catch(error => {
            this.snackBar.open(error.toString(), '', {
                duration: 3000
            });
        });
    }
}