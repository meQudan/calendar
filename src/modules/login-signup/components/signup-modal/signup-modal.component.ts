import { Component } from '@angular/core';
import { AuthService } from 'src/modules/login-signup/services/auth/auth.service';

@Component({
	selector: 'app-signup-modal',
	templateUrl: './signup-modal.component.html',
	styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent {
	constructor(protected authService: AuthService) {}

	public openLoginModal(): void {
		this.authService.openLoginModal();
	}
}
