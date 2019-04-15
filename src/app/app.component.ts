import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(u => {
      if (confirm('Update Available - Install it?')) {
        swUpdate.activateUpdate().then(() =>
        document.location.reload());
      }
    });
  }

  title = 'few300demos';
}
