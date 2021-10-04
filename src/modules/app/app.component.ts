import { Component } from '@angular/core';
import { Database } from '@firebase/database';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(firebase: Database) {
		console.log(firebase);
		
	}
}
