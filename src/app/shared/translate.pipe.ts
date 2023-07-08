import { Pipe, PipeTransform } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import * as TRANSLATE from 'src/translate.json';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  private static readonly dictionary: {[key: string]: {ro: string, en: string}} = TRANSLATE;

  private static _currentLanguage: 'en' | 'ro' = 'en';
  private static translations: {[key: string]: ReplaySubject<string> } = {};

  transform(value: string): Observable<string> {
    if(!(value in TranslatePipe.dictionary)) {
      return new BehaviorSubject<string>(value);
    }
    if(value in TranslatePipe.translations) {
      return TranslatePipe.translations[value].asObservable();
    }
    TranslatePipe.translations[value] = new ReplaySubject<string>();
    TranslatePipe.translations[value].next(TranslatePipe.dictionary[value][TranslatePipe.currentLanguage]);
    return TranslatePipe.translations[value].asObservable();
  }

  static get currentLanguage(): 'en' | 'ro' {
    return TranslatePipe._currentLanguage;
  }

  static set currentLanguage(value: 'en' | 'ro') {
    TranslatePipe._currentLanguage = value;
    for(const key in TranslatePipe.translations) {
      TranslatePipe.translations[key].next(TranslatePipe.dictionary[key][TranslatePipe.currentLanguage]);
    }
  }

}
