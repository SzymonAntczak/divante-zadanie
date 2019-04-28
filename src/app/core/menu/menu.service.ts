import { Injectable } from '@angular/core';
import { MenuItem } from './menu.model';
import { menuData } from './menu.data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MenuService {
  private menuItems$ = new BehaviorSubject<MenuItem[]>(null);

  constructor() {
    this.menuItems$.next(menuData);
  }

  getMenuItems(): Observable<MenuItem[]> {
    return this.menuItems$.asObservable();
  }
}