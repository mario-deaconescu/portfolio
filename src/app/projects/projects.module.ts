import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ProjectPanelComponent } from './project-panel/project-panel.component';
import { ProjectsComponent } from './projects.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    ProjectPanelComponent,
    ProjectsComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        ProjectsRoutingModule,
        SharedModule,
        MatDividerModule
    ]
})
export class ProjectsModule { }
