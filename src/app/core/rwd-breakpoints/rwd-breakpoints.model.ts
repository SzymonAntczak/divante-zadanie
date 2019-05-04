import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

export interface MaRwdBreakpoint {
  minSize: number;
  subject: BehaviorSubject<boolean>;
}

export interface RwdBreakpoints {
  default: MaRwdBreakpoint;
  desktopDevices: MaRwdBreakpoint;
  laptopDevices: MaRwdBreakpoint;
  laptopSmallDevices: MaRwdBreakpoint;
  tabletDevices: MaRwdBreakpoint;
  tabletSmallDevices: MaRwdBreakpoint;
  phoneDevices: MaRwdBreakpoint;
  phoneSmallDevices: MaRwdBreakpoint;
}
