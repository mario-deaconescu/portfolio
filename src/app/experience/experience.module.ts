import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { ExperienceComponent } from './experience.component';
import {ExperienceRoutingModule} from "./experience-routing.module";
import { TimelineItemComponent } from './timeline/timeline-item/timeline-item.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    TimelineComponent,
    ExperienceComponent,
    TimelineItemComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule
  ]
})
export class ExperienceModule { }
