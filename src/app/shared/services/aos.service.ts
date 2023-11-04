import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AosService {

  private readonly manualRecheck$ = new Subject<void>();

  public manualRecheck(): void {
    this.manualRecheck$.next();
  }
  public get recheck$() {
    return this.manualRecheck$.asObservable();
  }
  constructor() { }
}
