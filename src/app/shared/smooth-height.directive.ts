import {Directive, OnChanges, Input, HostBinding, ElementRef, OnDestroy} from '@angular/core';

@Directive({
  selector: '[smoothHeight]',
  host: { '[style.display]': '"block"', '[style.overflow]': '"hidden"' }
})
export class SmoothHeightDirective implements OnChanges, OnDestroy{
  @Input()
  smoothHeight?: any;
  pulse? : boolean;
  startHeight?: number;

  private resizeTimeout?: NodeJS.Timeout;

  constructor(private element: ElementRef) {}

  @HostBinding('@grow')
  get grow() {
    return { value: this.pulse, params: { startHeight: this.startHeight } };
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges() {
    this.resizeTimeout = setTimeout(() => this.setStartHeight(), 100);
    this.pulse = !this.pulse;
  }

  ngOnDestroy() {
    if(this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }
}
