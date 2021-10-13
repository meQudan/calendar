import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

type TSnackBarClass = 'success' | 'warning' | 'error';

@Injectable({
	providedIn: 'root',
})
export class NotificationService {
	private snackBarConfig: MatSnackBarConfig<any> = {
		horizontalPosition: 'right',
		verticalPosition: 'top',
		duration: 5000,
	};

	constructor(private snackBar: MatSnackBar) {}

	public showNotification(snackBarClass: TSnackBarClass, snackBarMessage: string, snackBarAction: string = 'X'): void {
		this.snackBarConfig.panelClass = snackBarClass;

		this.snackBar.open(snackBarMessage, snackBarAction, this.snackBarConfig);
	}
}
