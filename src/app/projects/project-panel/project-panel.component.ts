import {Component, Input} from '@angular/core';

export interface Technology {
  icon: string;
  scale?: number;
}

@Component({
  selector: 'project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.sass']
})
export class ProjectPanelComponent {

  @Input() name!: string;
  @Input() features!: string[];
  @Input() technologies!: Technology[];
  @Input() url?: string;


  protected goToUrl(): void {
    if (!this.url) return;
    window.open(this.url, '_blank');
  }

}
