import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMenuService } from '../../../../core/api/api-menu/api-menu.service';
import { MenuItem } from '../../../../core/api/api-menu/api-menu.model';

@Component({
  selector: 'dvt-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  public isSearchActive = false;
  public menuItems$: Observable<MenuItem[]>;

  constructor(private apiMenuService: ApiMenuService) { }

  ngOnInit() {
    this.menuItems$ = this.apiMenuService.getMenuItems();
  }

  public toggleSearch() {
    this.isSearchActive = this.isSearchActive ? false : true;
  }
}
