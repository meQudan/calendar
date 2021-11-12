import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, updateProfile } from '@angular/fire/auth';
import { LoginModalComponent } from 'src/modules/login-signup/components/login-modal/login-modal.component';
import { SignupModalComponent } from 'src/modules/login-signup/components/signup-modal/signup-modal.component';
import { NotificationService } from 'src/modules/core/services/notification/notification.service';
import {
	RestorePassModalComponent,
} from 'src/modules/login-signup/components/restore-pass-modal/restore-pass-modal.component';
import {IUser, IUserProfileChanges} from 'src/modules/login-signup/interfaces/user.interface';
import {BehaviorSubject} from "rxjs";

type TLoginSignupResult = 'error' | 'success';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public currentUser: IUser | null = null;

	public isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!this.currentUser);

	constructor(
		public dialog: MatDialog,
		private afAuth: AngularFireAuth,
		private notificationService: NotificationService
	) {
		this.afAuth.onAuthStateChanged((user) => {
			this.isUserLoggedIn$.next(!!user);
			this.currentUser = user;
			console.log(this.currentUser);
		});
	}

	public loginUser(email: string, password: string): Promise<TLoginSignupResult> {
		return this.afAuth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.notificationService.showNotification('success', 'Welcome again!');

				return 'success' as TLoginSignupResult;
			})
			.catch((err) => {
				const errCode = err.code;
				const errMessage = err.message;

				switch (errCode) {
					case 'auth/wrong-password':
						this.notificationService.showNotification('error', 'Wrong password');
						break;

					case 'auth/user-not-found':
						this.notificationService.showNotification('error', 'User not found');
						break;

					default:
						this.notificationService.showNotification('error', this.fbGetErrMessage(errMessage));
						break;
				}

				return 'error';
			});
	}

	public signupUser(user: any): Promise<TLoginSignupResult> {
		return this.afAuth
			.createUserWithEmailAndPassword(user.email, user.password)
			.then(() => {
				this.notificationService.showNotification('success', "You're welcome!");
				this.updateUserProfile( { displayName: 'asdasd' } );


				return 'success' as TLoginSignupResult;
			})
			.catch((err) => {
				const errCode = err.code;
				const errMessage = err.message;

				switch (errCode) {
					case 'auth/weak-password':
						this.notificationService.showNotification('error', 'Weak password');
						break;

					case 'auth/email-already-in-use':
						this.notificationService.showNotification('error', 'This email is already in use');
						break;

					default:
						this.notificationService.showNotification('error', this.fbGetErrMessage(errMessage));
						break;
				}

				return 'error';
			});
	}

	public restorePassword(email: string): Promise<TLoginSignupResult> {
		return this.afAuth
			.sendPasswordResetEmail(email)
			.then(() => {
				this.notificationService.showNotification('success', 'A password recovery email has been sent to your email');

				return 'success' as TLoginSignupResult;
			})
			.catch((err) => {
				const errCode = err.code;
				const errMessage = err.message;

				switch (errCode) {
					case 'auth/user-not-found':
						this.notificationService.showNotification('error', 'User not found');
						break;
					case 'auth/invalid-email':
						this.notificationService.showNotification('error', 'Email is not valid');
						break;
					default:
						this.notificationService.showNotification('error', this.fbGetErrMessage(errMessage));
						break;
				}

				return 'error';
			});
	}

	public logoutUser(): Promise<any> {
		return this.afAuth.signOut();
	}

	public openLoginModal(): void {
		this.dialog.open(LoginModalComponent);
	}

	public openSignupModal(): void {
		this.dialog.open(SignupModalComponent);
	}

	public openRestorePassModal(): void {
		this.dialog.open(RestorePassModalComponent, { maxWidth: '400px' });
	}

	public updateUserProfile(changesObj: IUserProfileChanges) {
		const auth = getAuth();
		// @ts-ignore
		updateProfile(auth.currentUser, changesObj);
	}

	private fbGetErrMessage(errMessage: string): string {
		let messegeStartIndex = 0;
		let messegeEngIndex = errMessage.indexOf(' (auth/');

		if (errMessage.startsWith('Firebase: ')) {
			messegeStartIndex = 10;
		}

		return errMessage.slice(messegeStartIndex, messegeEngIndex);
	}

}
