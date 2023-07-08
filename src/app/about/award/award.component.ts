import {Component, Input} from '@angular/core';

@Component({
  selector: 'award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.sass']
})
export class AwardComponent {
  @Input() name!: string;
  @Input() image!: string;
}
