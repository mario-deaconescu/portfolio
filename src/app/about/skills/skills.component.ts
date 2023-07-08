import {Component, Input} from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {

  @Input() skill!: string;
  @Input() svg!: string;
}
