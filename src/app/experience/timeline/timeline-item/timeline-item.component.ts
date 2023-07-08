import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.sass']
})
export class TimelineItemComponent {
  @Input() name!: string;
  @Input() secondaryName!: string;
  @Input() from!: string;
  @Input() to!: string;

  constructor(private elementRef: ElementRef) {
  }

  public get html(): string {
    return this.elementRef.nativeElement.innerHTML;
  }
}
