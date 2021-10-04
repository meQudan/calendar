import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AngularFireModule } from '@angular/fire/compat';
import { DatabaseModule } from '@angular/fire/database';
import { AuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'src/modules/header/header.module';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule, MatSidenavModule, 
		AngularFireModule.initializeApp(environment.firebase), DatabaseModule, AuthModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
