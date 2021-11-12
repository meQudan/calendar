import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AuthModule } from '@angular/fire/auth';
import { LoginModalComponent } from 'src/modules/login-signup/components/login-modal/login-modal.component';
import { LoginSignupBtnsComponent } from 'src/modules/login-signup/components/login-signup-btns/login-signup-btns.component';
import { SignupModalComponent } from 'src/modules/login-signup/components/signup-modal/signup-modal.component';
import { LoginFormComponent } from 'src/modules/login-signup/components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { RestorePassModalComponent } from 'src/modules/login-signup/components/restore-pass-modal/restore-pass-modal.component';

@NgModule({
	declarations: [
		LoginModalComponent,
		LoginSignupBtnsComponent,
		SignupModalComponent,
		LoginFormComponent,
		SignupFormComponent,
		RestorePassModalComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatIconModule,
		ReactiveFormsModule,
		MatInputModule,
		AuthModule,
	],
	exports: [LoginSignupBtnsComponent],
})
export class LoginSignupModule {}
