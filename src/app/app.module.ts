import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {NgOptimizedImage} from "@angular/common";
import {StarBackgroundComponent} from "./star-background/star-background.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import { ContactFieldComponent } from './contact/contact-field/contact-field.component';
import {MatIconModule} from "@angular/material/icon";
import { MainComponent } from './main/main.component';
import {RouterLink} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    StarBackgroundComponent,
    ContactFieldComponent,
    MainComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    RouterLink,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
