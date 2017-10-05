import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private af: AngularFire
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        return this.af.auth.map(auth => {
            if (auth) {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        });
    }
}