import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { AboutComponent } from './about.component';
import {AboutRoutingModule} from "./about-routing.module";
import { SkillsComponent } from './skills/skills.component';
import { AwardComponent } from './award/award.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    AwardComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        NgOptimizedImage,
        SharedModule
    ]
})
export class AboutModule { }
