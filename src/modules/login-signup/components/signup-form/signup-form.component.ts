import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SignupModalComponent } from 'src/modules/login-signup/components/signup-modal/signup-modal.component';
import { AuthService } from 'src/modules/login-signup/services/auth/auth.service';

@Component({
	selector: 'app-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
	public hide: boolean = true;

	public email: FormControl;

	public password: FormControl;

	public form: FormGroup;

	constructor(protected authService: AuthService, protected dialogRef: MatDialogRef<SignupModalComponent>) {
		this.email = new FormControl('', [Validators.required, Validators.email]);
		this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);

		this.form = new FormGroup({
			email: this.email,
			password: this.password,
		});
	}

	public getEmailErrorMessage(): string {
		if (this.email.hasError('required')) {
			return 'You must enter a email';
		} else if (this.email.hasError('email')) {
			return 'Not a valid email';
		} else {
			return '';
		}
	}

	public getPasswordErrorMessage(): string {
		if (this.password.hasError('required')) {
			return 'You must enter a password';
		} else if (this.password.hasError('minlength')) {
			return 'The password is too short. Min length: 6';
		} else {
			return '';
		}
	}

	public onSubmit(): void {
		if (this.form.valid) {
			this.authService.signupUser(this.form.value).then((res) => {
				if (res == 'success') {
					this.dialogRef.close();
				}
			});
		}
	}
}
