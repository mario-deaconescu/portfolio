import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSize {

  constructor() { }

  public get isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
