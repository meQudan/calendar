import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-login-signup',
	templateUrl: './login-signup.component.html',
	styleUrls: ['./login-signup.component.scss'],
})
export class LoginSignupComponent implements OnInit {
	protected resize$: Subscription | undefined;

	private $destroy: Subject<void> = new Subject();

	public oneBtn: boolean = true;

	ngOnInit(): void {
		this.oneBtn = window.matchMedia('(min-width: 400px)').matches;

		this.resize$ = fromEvent(window, 'resize')
			.pipe(takeUntil(this.$destroy))
			.subscribe({
				next: () => {
					// eslint-disable-next-line no-console
					console.log(this.resize$);
				},
			});
	}
}
