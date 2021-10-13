import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';

import { LoginSignupModule } from 'src/modules/login-signup/login-signup.module';

@NgModule({
	declarations: [HeaderToolbarComponent],
	imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, LoginSignupModule],
	exports: [HeaderToolbarComponent],
})
export class HeaderModule {}
