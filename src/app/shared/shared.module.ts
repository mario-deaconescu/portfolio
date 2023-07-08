import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothHeightDirective } from './smooth-height.directive';
import { SmoothTextComponent } from './smooth-text/smooth-text.component';
import { CdnPipe } from './cdn.pipe';



@NgModule({
    declarations: [
        SmoothHeightDirective,
        SmoothTextComponent,
        CdnPipe,
    ],
  exports: [
    SmoothHeightDirective,
    SmoothTextComponent,
    CdnPipe,
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
