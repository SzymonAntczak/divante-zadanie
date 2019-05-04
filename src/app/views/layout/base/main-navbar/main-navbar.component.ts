import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMenuService } from '../../../../core/api/api-menu/api-menu.service';
import { MenuItem } from '../../../../core/api/api-menu/api-menu.model';
import { RwdBreakpointsService } from '../../../../core/rwd-breakpoints/rwd-breakpoints.service';

@Component({
  selector: 'dvt-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  public isSearchActive = false;
  public isMobileMenuOpen = false;
  public menuItems$: Observable<MenuItem[]>;
  public isTabletSmall: boolean;

  @HostListener('wheel', ['$event']) handleWheelEvent(event) {
    event.preventDefault();
  }

  @HostListener('touchmove', ['$event']) function(event) {
    event.preventDefault();
  }

  constructor(
    private apiMenuService: ApiMenuService,
    private rwdBreakpointsService: RwdBreakpointsService
  ) { }

  ngOnInit() {
    this.menuItems$ = this.apiMenuService.getMenuItems();
    this.rwdBreakpointsService.getRwdBreakpoint('tabletSmallDevices').subscribe(isTabletSmall => this.isTabletSmall = isTabletSmall);
  }

  public toggleSearch() {
    this.isSearchActive = this.isSearchActive ? false : true;
  }

  public toggleMobileMenu() {
    this.isMobileMenuOpen = this.isMobileMenuOpen ? false : true;
  }

}
