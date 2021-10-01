import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';

@NgModule({
	declarations: [HeaderToolbarComponent, LoginSignupComponent],
	imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
	exports: [HeaderToolbarComponent],
})
export class HeaderModule {}
