import { Component, OnInit } from '@angular/core';
import { Options } from 'angular2-notifications';

@Component({
  selector: 'dvt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  notificationOptions: Options;

  ngOnInit() {
    this.notificationOptions = {
      position: [ 'top', 'center' ],
      timeOut: 2000,
      showProgressBar: true
    };
  }
}
