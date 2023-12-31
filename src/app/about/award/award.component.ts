import {Component, Input} from '@angular/core';

@Component({
  selector: 'award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.sass']
})
export class AwardComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) image!: string;
  @Input() imageStyle?: any;
}
