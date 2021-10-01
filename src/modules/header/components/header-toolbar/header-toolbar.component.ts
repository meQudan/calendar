import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header-toolbar',
	templateUrl: './header-toolbar.component.html',
	styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent {
	@Output() toggleSidenav = new EventEmitter<boolean>();

	public isAuth: boolean = false;

	toggleBurger(): void {
		this.toggleSidenav.emit();
	}
}
