import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Welcome from the AppComponent</h1>
              <app-shipping></app-shipping>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
