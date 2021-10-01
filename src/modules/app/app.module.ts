import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'src/modules/header/header.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule, MatSidenavModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
