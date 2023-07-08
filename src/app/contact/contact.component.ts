import { Component } from '@angular/core';
import {ScreenSize} from "../shared/screen-size.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [
    trigger('openClose', [
      state('open', style({
        maxHeight: '20rem',
      })),
      state('closed', style({
        maxHeight: '0',
      })),
      transition('open <=> closed', [
        animate('1s ease')
      ]),
    ]),
  ],
})
export class ContactComponent {

  private extended: boolean = false;

  constructor(protected screenSize: ScreenSize) { }

  protected get isExtended(): boolean {
    return (!this.screenSize.isMobile) || this.extended;
  }

  protected toggleExtended(): void {
    this.extended = !this.extended;
  }
}
