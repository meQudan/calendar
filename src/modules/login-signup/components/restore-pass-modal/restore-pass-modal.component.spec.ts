import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePassModalComponent } from './restore-pass-modal.component';

describe('RestorePassModalComponent', () => {
	let component: RestorePassModalComponent;
	let fixture: ComponentFixture<RestorePassModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RestorePassModalComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RestorePassModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
