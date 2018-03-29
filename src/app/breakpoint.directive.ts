import { Directive, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appBreakpoint]'
})
export class BreakpointDirective {

  constructor(private breakpointObserver: BreakpointObserver) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.break(this.breakpoint);
  }

  private break(breakpoint: string) {
    this.isBreakpoint(breakpoint);
  }

  private isBreakpoint(breakpoint) {
    return this.breakpointObserver.isMatched(`(max-width: ${breakpoint})`);
  }

  @Input('appBreakpoint') breakpoint: string;

  @HostBinding('attr.matTooltipDisabled') isbreakpoint = this.break(this.breakpoint);

}
