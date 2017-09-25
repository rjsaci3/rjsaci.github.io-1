import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { AngularFire } from 'angularfire2';
import { MdSidenav } from '@angular/material';

import { HelperService } from './_shared/index';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	currentUser = {
		id: ""
	};
	sidenavPosition = "";
	sidenavTransition = "";
	sidenavVisiblity = "";

	@ViewChild('sideNav') sideNav: MdSidenav;

	constructor(
		private af: AngularFire,
		private router: Router,
		private helperService: HelperService,
		private ele: ElementRef
	) { 
		this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.sideNav.close();
			}
		});
	}

	ngOnInit() {
		this.helperService.eleSidenavContent = this.ele.nativeElement.querySelector(".mat-sidenav-content");
		
		this.getUser();
	}

	getUser() {
		this.af.auth.subscribe(auth => {
			if (auth) {
				this.currentUser.id = auth.uid
			}
		});
	}

	logout() {
		this.af.auth.logout();
		this.currentUser.id = "";
		this.router.navigate(['/login']);
	}

	onSidenavOpen(event) {
		if (event.deltaX > 0) {
			let percentage = 100 - (event.distance / this.sideNav._width * 100);
			if (event.deltaY <= 50 && event.deltaY >= -50) {			
				this.sidenavVisiblity = "visible";
				this.sidenavPosition = "translateX(-" + percentage + "%)";
				this.sidenavTransition = "initial";
			}
		}
	}

	onSidenavOpenEnd(event) {
		let percentage = event.distance / this.sideNav._width * 100;
		this.sidenavPosition = "";
		this.sidenavTransition = "";
		this.sidenavVisiblity = "";
		if (event.deltaY <= 50 && event.deltaY >= -50 && percentage >= 30) {
			this.sideNav.open();
		}
	}

	onSidenavClose(event) {
		if (event.deltaX < 0) {
			let percentage = event.deltaX / this.sideNav._width * 100;
			if (event.deltaY <= 50 && event.deltaY >= -50) {			
				this.sidenavPosition = "translateX(" + percentage + "%)";
				this.sidenavTransition = "initial";
			}
		}
	}

	onSidenavCloseEnd(event) {
		let percentage = event.distance / this.sideNav._width * 100;
		this.sidenavPosition = "";
		this.sidenavTransition = "";
		if (event.deltaY <= 50 && event.deltaY >= -50 && percentage >= 35) {
			this.sideNav.close();
		}
	}
}
