import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../../core/menu/menu.service';
import { MenuItem } from '../../../../core/menu/menu.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'dvt-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  public isSearchActive = false;
  public menuItems$: Observable<MenuItem[]>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems$ = this.menuService.getMenuItems();
  }

  toggleSearch() {
    this.isSearchActive = this.isSearchActive ? false : true;
  }
}
