import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './api-menu.model';

@Injectable()
export class ApiMenuService {

  constructor() { }

  public getMenuItems(): Observable<MenuItem[]> {
    return Observable.of([
      {
        name: 'Home',
        routerLink: ''
      },
      {
        name: 'About',
        routerLink: '/about'
      },
      {
        name: 'Contact',
        routerLink: '/contact'
      }
    ]);
  }
}
