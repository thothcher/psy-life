import { Component, ChangeDetectionStrategy, signal, computed, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GLOSSARY } from '../../data/book-data';
import { GlossaryTerm } from '../../data/types';
import { LanguageService } from '../../services/language.service';

const CHAPTERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

@Component({
  selector: 'app-glossary',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">

        <!-- Header -->
        <div class="page-header">
          <span class="badge badge-primary">
            <iconify-icon icon="mdi:book-alphabet" style="vertical-align: -0.125em; margin-right: 0.3rem"></iconify-icon>
            {{ langService.t('glossary.badge') }}
          </span>
          <h1 class="page-title">{{ langService.t('glossary.title') }}</h1>
          <p class="page-subtitle">{{ langService.t('glossary.subtitle') }}</p>
          <div class="search-wrap">
            <iconify-icon icon="mdi:magnify" class="search-icon" width="20" height="20"></iconify-icon>
            <input
              class="search-input"
              type="search"
              [placeholder]="langService.t('glossary.searchPlaceholder')"
              [value]="search()"
              (input)="search.set($any($event.target).value)"
              aria-label="Search glossary terms"
            />
          </div>
        </div>

        <!-- Chapter filter -->
        <div class="filter-bar" role="group" aria-label="Filter by chapter">
          <button
            class="filter-btn"
            [class.active]="chapterFilter() === 0"
            (click)="chapterFilter.set(0); letterFilter.set('')">
            {{ langService.t('glossary.allChapters') }}
          </button>
          @for (ch of chapters; track ch) {
            <button
              class="filter-btn chapter-btn"
              [class.active]="chapterFilter() === ch"
              (click)="chapterFilter.set(ch); letterFilter.set('')">
              {{ langService.t('glossary.chapter') }}{{ ch }}
            </button>
          }
        </div>

        <!-- Alphabet filter -->
        <div class="alpha-bar" role="group" aria-label="Filter by letter">
          <button
            class="alpha-btn"
            [class.active]="letterFilter() === ''"
            (click)="letterFilter.set('')">
            {{ langService.t('glossary.allLetters') }}
          </button>
          @for (letter of alphabet; track letter) {
            <button
              class="alpha-btn"
              [class.active]="letterFilter() === letter"
              [class.disabled]="!availableLetters().has(letter)"
              [attr.aria-disabled]="!availableLetters().has(letter)"
              (click)="availableLetters().has(letter) && letterFilter.set(letter)">
              {{ letter }}
            </button>
          }
        </div>

        <!-- Count -->
        <p class="count-text">
          {{ langService.t('glossary.showing') }}
          <strong>{{ filteredTerms().length }}</strong>
          {{ langService.t('glossary.of') }}
          {{ totalCount }}
          {{ langService.t('glossary.terms') }}
        </p>

        <!-- Terms grid -->
        @if (filteredTerms().length > 0) {
          <div class="terms-grid">
            @for (term of filteredTerms(); track term.id) {
              <article class="term-card card">
                <div class="term-header">
                  <h2 class="term-name">{{ getTerm(term) }}</h2>
                  <span class="chapter-badge">
                    {{ langService.t('glossary.chapter') }}{{ term.chapter }}
                  </span>
                </div>
                @if (langService.lang() !== 'en' && getTerm(term) !== term.term) {
                  <p class="term-english">{{ term.term }}</p>
                }
                <p class="term-definition">{{ getDef(term) }}</p>
                <div class="term-category">
                  <iconify-icon icon="mdi:folder-outline" width="13" height="13" style="vertical-align: -0.1em; margin-right: 0.25rem"></iconify-icon>
                  {{ term.category }}
                </div>
              </article>
            }
          </div>
        } @else {
          <div class="empty-state">
            <iconify-icon icon="mdi:book-search-outline" width="48" height="48"></iconify-icon>
            <p>{{ langService.t('glossary.noResults') }}</p>
          </div>
        }

      </div>
    </div>
  `,
  styles: `
    .search-wrap {
      position: relative;
      max-width: 520px;
      margin: 1.5rem auto 0;
    }
    .search-icon {
      position: absolute;
      left: 0.85rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--color-text-muted);
      pointer-events: none;
    }
    .search-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      background: var(--color-surface);
      color: var(--color-text);
      font-size: 0.95rem;
      box-sizing: border-box;
      transition: border-color var(--transition-fast);
    }
    .search-input:focus {
      outline: none;
      border-color: var(--color-primary);
    }

    .filter-bar {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
    .filter-btn {
      padding: 0.4rem 1rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      background: var(--color-surface);
      color: var(--color-text-light);
      cursor: pointer;
      font-size: 0.82rem;
      transition: all var(--transition-fast);
      white-space: nowrap;
    }
    .filter-btn:hover, .filter-btn.active {
      background: var(--color-primary);
      color: var(--color-text-on-primary);
      border-color: var(--color-primary);
    }
    .chapter-btn { min-width: 3.5rem; }

    .alpha-bar {
      display: flex;
      gap: 0.2rem;
      flex-wrap: wrap;
      margin-bottom: 1.25rem;
    }
    .alpha-btn {
      width: 2rem;
      height: 2rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      background: var(--color-surface);
      color: var(--color-text-light);
      cursor: pointer;
      font-size: 0.8rem;
      font-weight: 600;
      transition: all var(--transition-fast);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    .alpha-btn:hover:not(.disabled), .alpha-btn.active {
      background: var(--color-accent);
      color: var(--color-text-on-primary);
      border-color: var(--color-accent);
    }
    .alpha-btn.disabled {
      opacity: 0.3;
      cursor: default;
    }
    .alpha-btn:first-child { width: auto; padding: 0 0.6rem; }

    .count-text {
      font-size: 0.85rem;
      color: var(--color-text-muted);
      margin-bottom: 1.5rem;
    }

    .terms-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
    }

    .term-card {
      padding: 1.25rem 1.5rem;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }
    .term-card:hover {
      border-color: var(--color-primary);
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }

    .term-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
      margin-bottom: 0.25rem;
    }
    .term-name {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--color-text);
      margin: 0;
      line-height: 1.3;
    }
    .chapter-badge {
      flex-shrink: 0;
      background: var(--color-primary-light, rgba(99,102,241,0.12));
      color: var(--color-primary);
      font-size: 0.72rem;
      font-weight: 600;
      padding: 0.2rem 0.55rem;
      border-radius: var(--radius-full);
      white-space: nowrap;
    }
    .term-english {
      font-size: 0.78rem;
      color: var(--color-text-muted);
      margin: 0 0 0.6rem;
      font-style: italic;
    }
    .term-definition {
      font-size: 0.9rem;
      color: var(--color-text-light);
      line-height: 1.6;
      margin: 0.6rem 0 0.75rem;
    }
    .term-category {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      border-top: 1px solid var(--color-border);
      padding-top: 0.6rem;
    }

    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      color: var(--color-text-muted);
    }
    .empty-state iconify-icon { margin-bottom: 1rem; display: block; }

    @media (max-width: 600px) {
      .terms-grid { grid-template-columns: 1fr; }
      .alpha-btn { width: 1.7rem; height: 1.7rem; font-size: 0.72rem; }
    }
  `
})
export class GlossaryPage {
  readonly langService = inject(LanguageService);

  readonly search = signal('');
  readonly chapterFilter = signal(0);
  readonly letterFilter = signal('');

  readonly chapters = CHAPTERS;
  readonly alphabet = ALPHABET;
  readonly totalCount = GLOSSARY.length;

  readonly filteredTerms = computed(() => {
    const lang = this.langService.lang();
    const s = this.search().toLowerCase().trim();
    const ch = this.chapterFilter();
    const letter = this.letterFilter();

    return GLOSSARY.filter(t => {
      if (ch > 0 && t.chapter !== ch) return false;
      if (letter && !t.term.toUpperCase().startsWith(letter)) return false;
      if (s) {
        const termStr = this.getTerm(t).toLowerCase();
        const defStr = this.getDef(t).toLowerCase();
        if (!termStr.includes(s) && !defStr.includes(s) && !t.term.toLowerCase().includes(s)) return false;
      }
      return true;
    });
  });

  readonly availableLetters = computed(() => {
    const ch = this.chapterFilter();
    const pool = ch > 0 ? GLOSSARY.filter(t => t.chapter === ch) : GLOSSARY;
    return new Set(pool.map(t => t.term[0].toUpperCase()));
  });

  getTerm(t: GlossaryTerm): string {
    const l = this.langService.lang();
    if (l === 'ka' && t.termKa) return t.termKa;
    if (l === 'ru' && t.termRu) return t.termRu;
    if (l === 'hy' && t.termHy) return t.termHy;
    if (l === 'az' && t.termAz) return t.termAz;
    return t.term;
  }

  getDef(t: GlossaryTerm): string {
    const l = this.langService.lang();
    if (l === 'ka' && t.definitionKa) return t.definitionKa;
    if (l === 'ru' && t.definitionRu) return t.definitionRu;
    if (l === 'hy' && t.definitionHy) return t.definitionHy;
    if (l === 'az' && t.definitionAz) return t.definitionAz;
    return t.definition;
  }
}
