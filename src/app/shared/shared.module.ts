import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothHeightDirective } from './smooth-height.directive';
import { SmoothTextComponent } from './smooth-text/smooth-text.component';
import { CdnPipe } from './cdn.pipe';
import { TranslatePipe } from './translate.pipe';
import { AosDirective } from './directives/aos.directive';



@NgModule({
    declarations: [
        SmoothHeightDirective,
        SmoothTextComponent,
        CdnPipe,
        TranslatePipe,
        AosDirective,
    ],
    exports: [
        SmoothHeightDirective,
        SmoothTextComponent,
        CdnPipe,
        TranslatePipe,
        AosDirective,
    ],
    imports: [
        CommonModule
    ],
  providers: [
    TranslatePipe
  ]
})
export class SharedModule { }
