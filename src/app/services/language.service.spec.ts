import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { TRANSLATIONS } from '../i18n/translations';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to English ("en")', () => {
    expect(service.lang()).toBe('en');
  });

  it('should change language securely', () => {
    service.lang.set('ka');
    expect(service.lang()).toBe('ka');
  });

  it('should fallback to key if no translation exists', () => {
    const missingKey = 'non.existent.key.123';
    expect(service.t(missingKey)).toBe(missingKey);
  });
});
