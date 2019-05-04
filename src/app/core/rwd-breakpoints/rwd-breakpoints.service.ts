import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RwdBreakpoints } from './rwd-breakpoints.model';
import { BehaviorSubject } from 'rxjs';
import * as _ from "lodash";

@Injectable()
export class RwdBreakpointsService {
  private rwdBreakpoints: RwdBreakpoints = {
    default: { minSize: 99999, subject: new BehaviorSubject(true) },
    desktopDevices: { minSize: 1540, subject: new BehaviorSubject(true) },
    laptopDevices: { minSize: 1366, subject: new BehaviorSubject(true) },
    laptopSmallDevices: { minSize: 1200, subject: new BehaviorSubject(true) },
    tabletDevices: { minSize: 1024, subject: new BehaviorSubject(true) },
    tabletSmallDevices: { minSize: 768, subject: new BehaviorSubject(true) },
    phoneDevices: { minSize: 500, subject: new BehaviorSubject(true) },
    phoneSmallDevices: { minSize: 320, subject: new BehaviorSubject(true) }
  };

  constructor() {
    this.handleWindowSize(window.innerWidth);

    window.addEventListener('resize', event => {
      const target = event.target as Window;
      return this.handleWindowSize(target.innerWidth);
    }, false);
  }

  public getRwdBreakpoint(name: keyof RwdBreakpoints): Observable<boolean> {
    return this.rwdBreakpoints[name].subject.asObservable();
  };

  private handleWindowSize(size: number) {
    _.each(this.rwdBreakpoints, (breakpoint, key) => {
      size > breakpoint.minSize ? this.emitRwdBreakpoints(key, false) : this.emitRwdBreakpoints(key, true);
    });
  }

  private emitRwdBreakpoints(name: keyof RwdBreakpoints, value: boolean) {
    this.rwdBreakpoints[name].subject.next(value);
  };

}
