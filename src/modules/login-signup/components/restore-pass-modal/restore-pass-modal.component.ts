import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/modules/login-signup/services/auth/auth.service';

@Component({
	selector: 'app-restore-pass-modal',
	templateUrl: './restore-pass-modal.component.html',
	styleUrls: ['./restore-pass-modal.component.scss'],
})
export class RestorePassModalComponent {
	public email: FormControl;

	public form: FormGroup;

	constructor(protected authService: AuthService, protected dialogRef: MatDialogRef<RestorePassModalComponent>) {
		this.email = new FormControl('', [Validators.required, Validators.email]);

		this.form = new FormGroup({
			email: this.email,
		});
	}

	getEmailErrorMessage(): string {
		if (this.email.hasError('required')) {
			return 'You must enter a email';
		} else if (this.email.hasError('email')) {
			return 'Not a valid email';
		} else {
			return '';
		}
	}

	public onSubmit(): void {
		this.authService.restorePassword(this.email.value).then((res) => {
			if (res == 'success') {
				this.dialogRef.close();
			}
		});
	}
}
