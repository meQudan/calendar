import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../login-signup/services/auth/auth.service";

@Component({
	selector: 'app-header-toolbar',
	templateUrl: './header-toolbar.component.html',
	styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent implements OnInit {
	@Output() toggleSidenav = new EventEmitter<boolean>();

	public isAuth: boolean = false;

	constructor(protected authService: AuthService) {
	}

	ngOnInit() {
		this.setHandlers();
	}

	toggleBurger(): void {
		this.toggleSidenav.emit();
	}

	protected setHandlers(): void {
		this.authService.isUserLoggedIn$.subscribe(isAuth => this.isAuth = isAuth);
	}

	public logout() {
		this.authService.logoutUser();
	}
}
