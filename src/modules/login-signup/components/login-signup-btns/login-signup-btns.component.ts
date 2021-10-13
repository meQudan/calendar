import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/modules/login-signup/services/auth/auth.service';

@Component({
	selector: 'app-login-signup-btns',
	templateUrl: './login-signup-btns.component.html',
	styleUrls: ['./login-signup-btns.component.scss'],
})
export class LoginSignupBtnsComponent implements OnInit {
	protected resize$: Subscription | undefined;

	private $destroy: Subject<void> = new Subject();

	public twoBtns: boolean;

	constructor(protected authService: AuthService) {
		this.twoBtns = window.matchMedia('(min-width: 400px)').matches;
	}

	ngOnInit(): void {
		this.resize$ = fromEvent(window, 'resize')
			.pipe(takeUntil(this.$destroy))
			.subscribe({
				next: () => {
					// TODO: вынести отсюда
					if (this.twoBtns !== window.matchMedia('(min-width: 400px)').matches) {
						this.twoBtns = !this.twoBtns;
					}
				},
			});
	}

	public openLoginDialog() {
		this.authService.openLoginModal();
	}

	public openSignupDialog() {
		this.authService.openSignupModal();
	}
}
