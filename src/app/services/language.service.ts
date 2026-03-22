import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<'en' | 'ka'>('en');

  t(key: string): string {
    return TRANSLATIONS[key]?.[this.lang()] ?? key;
  }
}
