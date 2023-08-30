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
  protected readonly info = new class {
    readonly email: string = 'contact@mariodeaconescu.com';
    readonly phone: string = '40743141535';
    readonly github: string = 'mario-deaconescu';
    readonly linkedin: string = 'mario-deaconescu';
    get phoneFormatted(): string {
      const regex = /[0-9]{1,3}/g;
      const groups = this.phone.split('').reverse().join('').match(regex)?.reverse().map(
        group => group.split('').reverse().join('')
      );
      return groups ? '+' + groups.join(' ') : '';
    }
    get githubUrl(): string {
      return `https://github.com/${this.github}`;
    }
    get linkedinUrl(): string {
      return `https://www.linkedin.com/in/${this.linkedin}`;
    }
  };

  constructor(protected screenSize: ScreenSize) { }

  protected get isExtended(): boolean {
    return (!this.screenSize.isMobile) || this.extended;
  }

  protected toggleExtended(): void {
    this.extended = !this.extended;
  }
}
