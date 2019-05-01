import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'dvt-sidebar-cart',
  templateUrl: './sidebar-cart.component.html',
  styleUrls: ['./sidebar-cart.component.scss']
})
export class SidebarCartComponent implements OnInit {
  private isSidebarCartActive = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }

  public toggleSidebarCart() {
    this.isSidebarCartActive = this.isSidebarCartActive ? false : true;

    if (this.isSidebarCartActive) {
      this.renderer.addClass(this.elementRef.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'active');
    }
  }

}
