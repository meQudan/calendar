import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupBtnsComponent } from './login-signup-btns.component';

describe('LoginSignupBtnsComponent', () => {
	let component: LoginSignupBtnsComponent;
	let fixture: ComponentFixture<LoginSignupBtnsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginSignupBtnsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginSignupBtnsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
