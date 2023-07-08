import {Component} from '@angular/core';
import {TranslatePipe} from "../shared/translate.pipe";

@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.sass']
})
export class LanguagePickerComponent {

  protected readonly languages = [
    {
      code: 'en',
      icon: '🇺🇸',
      name: 'English'
    },
    {
      code: 'ro',
      icon: '🇷🇴',
      name: 'Română'
    }
  ]

  protected selectedLanguage: 'en' | 'ro' = 'en';

  constructor() {
  }

  onLanguageChange(event: Event) {
    if (event.target === null || !('value' in event.target)) {
      return;

    }
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'en' || value === 'ro') {
      TranslatePipe.currentLanguage = value;
      this.selectedLanguage = value;
    }
  }
}
