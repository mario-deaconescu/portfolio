import {Component, Input} from '@angular/core';

@Component({
  selector: 'contact-field',
  templateUrl: './contact-field.component.html',
  styleUrls: ['./contact-field.component.sass']
})
export class ContactFieldComponent {

  @Input('label') label!: string;
  @Input('value') value!: string;
  @Input('icon') icon!: string;
  @Input('link') link?: string;
}
