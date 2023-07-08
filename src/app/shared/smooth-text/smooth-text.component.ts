import {AfterViewInit, Component, ElementRef, Input, OnChanges, signal, ViewChild, WritableSignal} from '@angular/core';

@Component({
  selector: 'smooth-text',
  templateUrl: './smooth-text.component.html',
  styleUrls: ['./smooth-text.component.sass']
})
export class SmoothTextComponent implements AfterViewInit, OnChanges{

  @Input() input!: string;

  @ViewChild('textContainer') textContainer!: ElementRef;

  protected readonly text: WritableSignal<string> = signal<string>('');

  private async animateText() {
    if(!this.textContainer) return;
    // Set opacity to 0
    this.textContainer.nativeElement.style.opacity = 0;
    await new Promise(resolve => setTimeout(resolve, 300));
    // Set text to input
    this.text.set(this.input);
    // Set opacity to 1
    this.textContainer.nativeElement.style.opacity = 1;
  }

  ngAfterViewInit() {
    this.text.set(this.input);
  }

  ngOnChanges() {
    if(this.text() === this.input) return;
    if(this.text() === '') {
      this.text.set(this.input);
      return;
    }
    this.animateText();
  }
}
