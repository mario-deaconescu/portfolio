import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ProjectPanelComponent } from './project-panel/project-panel.component';
import { ProjectsComponent } from './projects.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { DarelyProjectComponent } from './darely-project/darely-project.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ProjectPanelComponent,
    ProjectsComponent,
    DarelyProjectComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        ProjectsRoutingModule,
        SharedModule,
        MatDividerModule,
        MatIconModule,
        MatDialogModule
    ]
})
export class ProjectsModule { }
