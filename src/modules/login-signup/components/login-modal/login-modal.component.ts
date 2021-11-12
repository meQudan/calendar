import { Component } from '@angular/core';
import { AuthService } from 'src/modules/login-signup/services/auth/auth.service';

@Component({
	selector: 'app-login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
	constructor(protected authService: AuthService) {}

	public openSignupModal(): void {
		this.authService.openSignupModal();
	}

	public openrestorePassModal(): void {
		this.authService.openRestorePassModal();
	}
}
