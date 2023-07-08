import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  signal,
  TemplateRef,
  WritableSignal
} from '@angular/core';
@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements AfterContentInit{
  @Input() name!: string;
  @Input() icon!: string;
  @ContentChildren(TemplateRef) itemComponents!: QueryList<TemplateRef<any>>;
  protected readonly items: WritableSignal<TemplateRef<any>[]> = signal([]);

  ngAfterContentInit(): void {
    this.items.set(this.itemComponents.toArray());
  }
}
