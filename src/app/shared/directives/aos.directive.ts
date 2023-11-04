import {AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {distinct, distinctUntilChanged, fromEvent, map, merge, pairwise, startWith, Subject, Subscription} from "rxjs";
import {AosService} from "../services/aos.service";

enum AosState{
  AboveViewport,
  InViewport,
  BelowViewport
}

@Directive({
  selector: '[aos]'
})
export class AosDirective implements AfterViewInit, OnDestroy{
  // Animate on scroll
  @Input() aos!: string;

  private subscription?: Subscription;

  constructor(private readonly elementRef: ElementRef, private readonly aosService: AosService) {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    nativeElement.style.opacity = '0';
    nativeElement.classList.add('animate__animated');
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    console.log('aos', this.aos);
    const scroll$ = fromEvent(window, 'scroll').pipe(
      map(event => {
        // Return scroll position
        return window.scrollY;
      })
    );
    const enterViewport$ = merge(scroll$, this.aosService.recheck$).pipe(
      startWith(0),
      map(scrollY => {
        // Return true if the element is in the viewport
        const rect = this.elementRef.nativeElement.getBoundingClientRect();
        console.log(rect.top, window.innerHeight, scrollY);
        const aboveViewport = rect.bottom < 0;
        const belowViewport = rect.top > window.innerHeight;
        return aboveViewport ? AosState.AboveViewport : belowViewport ? AosState.BelowViewport : AosState.InViewport;
      }),
      startWith(AosState.BelowViewport),
      pairwise(),
      distinctUntilChanged()
    );
    this.subscription = enterViewport$.subscribe(([previous, current]) => {
      if (current === AosState.InViewport && previous === AosState.BelowViewport) {
        // const rect = this.elementRef.nativeElement.getBoundingClientRect();
        // console.log(rect.top, window.innerHeight, scrollY);
        this.elementRef.nativeElement.style.opacity = '1';
        this.elementRef.nativeElement.classList.add(this.aos);
      } else if(current === AosState.BelowViewport && previous === AosState.InViewport) {
        this.elementRef.nativeElement.style.opacity = '0';
        this.elementRef.nativeElement.classList.remove(this.aos);
      }
    });
  }

}
