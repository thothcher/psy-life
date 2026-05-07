import {
  Component,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
  computed,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import {
  MIDTERM_VARIANTS,
  MidtermVariant,
  MidtermQuestion,
} from '../../data/midterm-data';

type Phase = 'select' | 'quiz' | 'results';

interface AnswerState {
  // For MCQ — selected option index
  mcqIndex?: number;
  // For fill — array of strings (one per blank)
  blanks?: string[];
  // For scenario — selected option index keyed by field key
  scenario?: Record<string, number>;
}

interface QuestionResult {
  question: MidtermQuestion;
  answer: AnswerState;
  isCorrect: boolean;
  // For fill: per-blank correctness
  blankCorrect?: boolean[];
  // For scenario: per-field correctness (auto-graded best-effort)
  scenarioCorrect?: Record<string, boolean>;
}

function normalize(s: string): string {
  return (s ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function fillMatches(input: string, answer: string, accepts: string[] = []): boolean {
  const n = normalize(input);
  if (!n) return false;
  const candidates = [answer, ...accepts].map(normalize).filter(Boolean);
  return candidates.some((c) => n === c || n.includes(c) || c.includes(n));
}

@Component({
  selector: 'app-midterm',
  imports: [FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page midterm-page">
      <div class="container">

        @if (phase() === 'select') {
          <!-- ── Variant selector ── -->
          <header class="mt-header">
            <span class="badge badge-primary">
              <iconify-icon icon="mdi:clipboard-text-clock-outline" style="vertical-align: -0.125em; margin-right: 0.3rem"></iconify-icon>
              {{ langService.t('midterm.badge') }}
            </span>
            <h1 class="page-title">{{ langService.t('midterm.title') }}</h1>
            <p class="page-subtitle">{{ langService.t('midterm.subtitle') }}</p>
          </header>

          <div class="mt-stats" role="list">
            <div class="mt-stat" role="listitem">
              <iconify-icon icon="mdi:file-document-multiple-outline" width="22" height="22"></iconify-icon>
              <span class="mt-stat-num">{{ variants.length }}</span>
              <span class="mt-stat-label">{{ langService.t('midterm.variants') }}</span>
            </div>
            <div class="mt-stat" role="listitem">
              <iconify-icon icon="mdi:help-circle-outline" width="22" height="22"></iconify-icon>
              <span class="mt-stat-num">{{ totalQuestions }}</span>
              <span class="mt-stat-label">{{ langService.t('midterm.questions') }}</span>
            </div>
            <div class="mt-stat" role="listitem">
              <iconify-icon icon="mdi:school-outline" width="22" height="22"></iconify-icon>
              <span class="mt-stat-num">{{ officialCount }}</span>
              <span class="mt-stat-label">{{ langService.t('midterm.official') }}</span>
            </div>
            <div class="mt-stat" role="listitem">
              <iconify-icon icon="mdi:lightbulb-on-outline" width="22" height="22"></iconify-icon>
              <span class="mt-stat-num">{{ extraCount }}</span>
              <span class="mt-stat-label">{{ langService.t('midterm.extra') }}</span>
            </div>
          </div>

          <div class="mt-info">
            <iconify-icon icon="mdi:information-outline" width="18" height="18" aria-hidden="true"></iconify-icon>
            <span>{{ langService.t('midterm.info') }}</span>
          </div>

          <div class="mt-grid">
            @for (v of variants; track v.id) {
              <button
                type="button"
                class="mt-card"
                [class.mt-card--official]="v.source === 'official'"
                [class.mt-card--extra]="v.source === 'extra'"
                (click)="startVariant(v)"
                [attr.aria-label]="langService.t('midterm.startVariant') + ' ' + v.id">
                <span class="mt-card-num">{{ v.id }}</span>
                <span class="mt-card-source">
                  @if (v.source === 'official') {
                    <iconify-icon icon="mdi:shield-check-outline" width="13" height="13"></iconify-icon>
                    {{ langService.t('midterm.official') }}
                  } @else {
                    <iconify-icon icon="mdi:sparkles" width="13" height="13"></iconify-icon>
                    {{ langService.t('midterm.extra') }}
                  }
                </span>
                <span class="mt-card-title">{{ v.title }}</span>
                <span class="mt-card-meta">
                  <iconify-icon icon="mdi:format-list-numbered" width="14" height="14"></iconify-icon>
                  {{ v.questions.length }} {{ langService.t('midterm.qShort') }}
                </span>
                <span class="mt-card-cta">
                  <iconify-icon icon="mdi:play-circle" width="18" height="18"></iconify-icon>
                  {{ langService.t('midterm.start') }}
                </span>
              </button>
            }
          </div>
        }

        @else if (phase() === 'quiz') {
          <!-- ── Quiz screen (one variant, all questions) ── -->
          <div class="mt-quiz">
            <div class="mt-quiz-top">
              <button type="button" class="mt-back" (click)="backToSelect()">
                <iconify-icon icon="mdi:arrow-left" width="18" height="18"></iconify-icon>
                {{ langService.t('midterm.backToList') }}
              </button>
              <span class="mt-quiz-title">
                <iconify-icon icon="mdi:clipboard-text-outline" width="20" height="20"></iconify-icon>
                {{ activeVariant()?.title }}
              </span>
              <span class="mt-quiz-progress">
                {{ filledCount() }} / {{ activeVariant()?.questions?.length }}
              </span>
            </div>

            <ol class="mt-questions">
              @for (q of activeVariant()?.questions ?? []; let qi = $index; track q.id) {
                <li class="mt-q card">
                  <h2 class="mt-q-prompt">{{ formatPromptLine(q.prompt) }}</h2>

                  @if (q.type === 'mcq') {
                    <ul class="mt-options" role="radiogroup" [attr.aria-label]="'Question ' + (qi + 1)">
                      @for (opt of q.options ?? []; let oi = $index; track oi) {
                        <li>
                          <button
                            type="button"
                            class="mt-option"
                            role="radio"
                            [attr.aria-checked]="getMcq(qi) === oi"
                            [class.selected]="getMcq(qi) === oi"
                            (click)="setMcq(qi, oi)">
                            <span class="mt-letter">{{ optionLetter(oi) }}</span>
                            <span class="mt-opt-text">{{ opt }}</span>
                          </button>
                        </li>
                      }
                    </ul>
                  }

                  @if (q.type === 'fill') {
                    <div class="mt-fill">
                      @for (b of q.blanks ?? []; let bi = $index; track bi) {
                        <label class="mt-fill-row">
                          <span class="mt-fill-label">
                            <iconify-icon icon="mdi:pencil-outline" width="14" height="14"></iconify-icon>
                            {{ langService.t('midterm.blank') }} {{ bi + 1 }}
                          </span>
                          <input
                            type="text"
                            class="mt-input"
                            [value]="getBlank(qi, bi)"
                            (input)="setBlank(qi, bi, $any($event.target).value)"
                            [attr.aria-label]="langService.t('midterm.blank') + ' ' + (bi + 1)"
                            autocomplete="off"
                            spellcheck="false"
                          />
                        </label>
                      }
                    </div>
                  }

                  @if (q.type === 'scenario') {
                    <p class="mt-scenario-hint">
                      <iconify-icon icon="mdi:lightbulb-outline" width="15" height="15"></iconify-icon>
                      {{ langService.t('midterm.scenarioHint') }}
                    </p>
                    <div class="mt-scenario">
                      @for (f of q.scenarioFields ?? []; track f.key) {
                        <fieldset class="mt-sc-row">
                          <legend class="mt-sc-label">{{ f.label }}</legend>
                          <ul class="mt-options" role="radiogroup" [attr.aria-label]="f.label">
                            @for (opt of f.options; let oi = $index; track oi) {
                              <li>
                                <button
                                  type="button"
                                  class="mt-option"
                                  role="radio"
                                  [attr.aria-checked]="getScenario(qi, f.key) === oi"
                                  [class.selected]="getScenario(qi, f.key) === oi"
                                  (click)="setScenario(qi, f.key, oi)">
                                  <span class="mt-letter">{{ optionLetter(oi) }}</span>
                                  <span class="mt-opt-text">{{ opt }}</span>
                                </button>
                              </li>
                            }
                          </ul>
                        </fieldset>
                      }
                    </div>
                  }
                </li>
              }
            </ol>

            <div class="mt-actions">
              <button type="button" class="btn btn-ghost" (click)="resetCurrent()">
                <iconify-icon icon="mdi:eraser" style="vertical-align: -0.15em; margin-right: 0.3rem"></iconify-icon>
                {{ langService.t('midterm.clear') }}
              </button>
              <button type="button" class="btn btn-accent btn-lg" (click)="submit()">
                <iconify-icon icon="mdi:send-check" style="vertical-align: -0.15em; margin-right: 0.4rem"></iconify-icon>
                {{ langService.t('midterm.submit') }}
              </button>
            </div>
          </div>
        }

        @else {
          <!-- ── Results screen ── -->
          <div class="mt-results">
            <div class="mt-result-summary card">
              <div class="mt-result-icon" [class.mt-good]="scorePercent() >= 70" [class.mt-mid]="scorePercent() >= 40 && scorePercent() < 70" [class.mt-low]="scorePercent() < 40">
                <iconify-icon
                  [attr.icon]="scorePercent() >= 70 ? 'mdi:trophy' : scorePercent() >= 40 ? 'mdi:medal-outline' : 'mdi:school-outline'"
                  width="44" height="44"></iconify-icon>
              </div>
              <h1>{{ langService.t('midterm.resultsTitle') }}</h1>
              <p class="mt-result-variant">{{ activeVariant()?.title }}</p>
              <div class="mt-score">
                <span class="mt-score-num">{{ totalScore() }}</span>
                <span class="mt-score-divider">/</span>
                <span class="mt-score-tot">{{ maxScore() }}</span>
              </div>
              <div class="mt-score-bar">
                <div class="mt-score-fill"
                     [style.width.%]="scorePercent()"
                     [class.high]="scorePercent() >= 70"
                     [class.med]="scorePercent() >= 40 && scorePercent() < 70"
                     [class.low]="scorePercent() < 40">
                </div>
              </div>
              <p class="mt-result-msg">
                @if (scorePercent() >= 70) { {{ langService.t('midterm.greatWork') }} }
                @else if (scorePercent() >= 40) { {{ langService.t('midterm.goodTry') }} }
                @else { {{ langService.t('midterm.keepStudying') }} }
              </p>
              <div class="mt-result-actions">
                <button type="button" class="btn btn-accent" (click)="retry()">
                  <iconify-icon icon="mdi:refresh" style="vertical-align: -0.15em; margin-right: 0.3rem"></iconify-icon>
                  {{ langService.t('midterm.retry') }}
                </button>
                <button type="button" class="btn btn-outline" (click)="backToSelect()">
                  <iconify-icon icon="mdi:format-list-bulleted" style="vertical-align: -0.15em; margin-right: 0.3rem"></iconify-icon>
                  {{ langService.t('midterm.tryAnother') }}
                </button>
              </div>
            </div>

            <ol class="mt-review">
              @for (r of results(); let qi = $index; track r.question.id) {
                <li class="mt-rev card" [class.is-correct]="r.isCorrect" [class.is-wrong]="!r.isCorrect">
                  <header class="mt-rev-head">
                    <span class="mt-rev-num">{{ qi + 1 }}</span>
                    <span class="mt-rev-status">
                      @if (r.isCorrect) {
                        <iconify-icon icon="mdi:check-circle" width="20" height="20"></iconify-icon>
                        {{ langService.t('midterm.correct') }}
                      } @else {
                        <iconify-icon icon="mdi:close-circle" width="20" height="20"></iconify-icon>
                        {{ langService.t('midterm.incorrect') }}
                      }
                    </span>
                  </header>

                  <p class="mt-rev-prompt">{{ formatPromptLine(r.question.prompt) }}</p>

                  @if (r.question.type === 'mcq') {
                    <div class="mt-rev-mcq">
                      @for (opt of r.question.options ?? []; let oi = $index; track oi) {
                        <div class="mt-rev-opt"
                             [class.user-pick]="r.answer.mcqIndex === oi"
                             [class.correct-opt]="r.question.correctIndex === oi"
                             [class.wrong-pick]="r.answer.mcqIndex === oi && r.question.correctIndex !== oi">
                          <span class="mt-letter">{{ optionLetter(oi) }}</span>
                          <span class="mt-rev-opt-text">{{ opt }}</span>
                          @if (r.question.correctIndex === oi) {
                            <span class="mt-rev-tag mt-rev-tag-good">
                              <iconify-icon icon="mdi:check-circle" width="14" height="14"></iconify-icon>
                              {{ langService.t('midterm.correctAnswer') }}
                            </span>
                          } @else if (r.answer.mcqIndex === oi) {
                            <span class="mt-rev-tag mt-rev-tag-bad">
                              <iconify-icon icon="mdi:close-circle" width="14" height="14"></iconify-icon>
                              {{ langService.t('midterm.yourAnswer') }}
                            </span>
                          }
                        </div>
                      }
                    </div>
                  }

                  @if (r.question.type === 'fill') {
                    <div class="mt-rev-fill">
                      @for (b of r.question.blanks ?? []; let bi = $index; track bi) {
                        <div class="mt-rev-blank" [class.ok]="r.blankCorrect?.[bi]" [class.bad]="!(r.blankCorrect?.[bi])">
                          <span class="mt-rev-blank-label">
                            <iconify-icon icon="mdi:pencil-outline" width="14" height="14"></iconify-icon>
                            {{ langService.t('midterm.blank') }} {{ bi + 1 }}
                          </span>
                          <div class="mt-rev-blank-row">
                            <span class="mt-rev-blank-tag">{{ langService.t('midterm.yourAnswer') }}:</span>
                            <span class="mt-rev-blank-user">{{ r.answer.blanks?.[bi] || '—' }}</span>
                          </div>
                          @if (!(r.blankCorrect?.[bi])) {
                            <div class="mt-rev-blank-row">
                              <span class="mt-rev-blank-tag mt-good">{{ langService.t('midterm.correctAnswer') }}:</span>
                              <span class="mt-rev-blank-correct">{{ b.answer }}</span>
                            </div>
                          }
                        </div>
                      }
                    </div>
                  }

                  @if (r.question.type === 'scenario') {
                    <div class="mt-rev-scenario">
                      @for (f of r.question.scenarioFields ?? []; track f.key) {
                        <div class="mt-rev-sc-row" [class.ok]="r.scenarioCorrect?.[f.key]" [class.bad]="!(r.scenarioCorrect?.[f.key])">
                          <div class="mt-rev-sc-head">
                            <span class="mt-rev-sc-label">{{ f.label }}</span>
                            <span class="mt-rev-sc-status">
                              @if (r.scenarioCorrect?.[f.key]) {
                                <iconify-icon icon="mdi:check-circle" width="14" height="14"></iconify-icon>
                                {{ langService.t('midterm.correct') }}
                              } @else {
                                <iconify-icon icon="mdi:close-circle" width="14" height="14"></iconify-icon>
                                {{ langService.t('midterm.incorrect') }}
                              }
                            </span>
                          </div>
                          <div class="mt-rev-mcq">
                            @for (opt of f.options; let oi = $index; track oi) {
                              <div class="mt-rev-opt"
                                   [class.user-pick]="r.answer.scenario?.[f.key] === oi"
                                   [class.correct-opt]="f.correctIndex === oi"
                                   [class.wrong-pick]="r.answer.scenario?.[f.key] === oi && f.correctIndex !== oi">
                                <span class="mt-letter">{{ optionLetter(oi) }}</span>
                                <span class="mt-rev-opt-text">{{ opt }}</span>
                                @if (f.correctIndex === oi) {
                                  <span class="mt-rev-tag mt-rev-tag-good">
                                    <iconify-icon icon="mdi:check-circle" width="14" height="14"></iconify-icon>
                                    {{ langService.t('midterm.correctAnswer') }}
                                  </span>
                                } @else if (r.answer.scenario?.[f.key] === oi) {
                                  <span class="mt-rev-tag mt-rev-tag-bad">
                                    <iconify-icon icon="mdi:close-circle" width="14" height="14"></iconify-icon>
                                    {{ langService.t('midterm.yourAnswer') }}
                                  </span>
                                }
                              </div>
                            }
                          </div>
                        </div>
                      }
                    </div>
                  }

                  @if (!r.isCorrect) {
                    <div class="mt-rev-explain mt-rev-explain-shown">
                      <span class="mt-rev-explain-head">
                        <iconify-icon icon="mdi:lightbulb-on" width="16" height="16"></iconify-icon>
                        {{ langService.t('midterm.whyThisAnswer') }}
                      </span>
                      <p>{{ r.question.explanation }}</p>
                    </div>
                  } @else {
                    <details class="mt-rev-explain">
                      <summary>
                        <iconify-icon icon="mdi:lightbulb-on-outline" width="16" height="16"></iconify-icon>
                        {{ langService.t('midterm.whyThisAnswer') }}
                      </summary>
                      <p>{{ r.question.explanation }}</p>
                    </details>
                  }
                </li>
              }
            </ol>

            <div class="mt-result-actions mt-result-actions-bottom">
              <button type="button" class="btn btn-accent" (click)="retry()">
                <iconify-icon icon="mdi:refresh" style="vertical-align: -0.15em; margin-right: 0.3rem"></iconify-icon>
                {{ langService.t('midterm.retry') }}
              </button>
              <button type="button" class="btn btn-outline" (click)="backToSelect()">
                <iconify-icon icon="mdi:format-list-bulleted" style="vertical-align: -0.15em; margin-right: 0.3rem"></iconify-icon>
                {{ langService.t('midterm.tryAnother') }}
              </button>
            </div>
          </div>
        }

      </div>
    </div>
  `,
  styles: `
    /* ── Page wrapper ── */
    .midterm-page { padding: 2rem 0 3rem; }

    .mt-header {
      text-align: center;
      max-width: 720px;
      margin: 0 auto 1.5rem;
    }
    .mt-header .page-title { margin: 0.5rem 0 0.5rem; }
    .mt-header .page-subtitle { color: var(--color-text-muted); margin: 0; line-height: 1.55; }

    /* ── Stats strip ── */
    .mt-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
      max-width: 720px;
      margin: 0 auto 1rem;
    }
    .mt-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.85rem 0.5rem;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      gap: 0.15rem;
      color: var(--color-text-light);
    }
    .mt-stat iconify-icon { color: var(--color-accent); }
    .mt-stat-num { font-weight: 800; font-size: 1.4rem; color: var(--color-primary); line-height: 1.1; }
    .mt-stat-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--color-text-muted); }
    @media (max-width: 600px) {
      .mt-stats { grid-template-columns: repeat(2, 1fr); }
    }

    /* ── Info banner ── */
    .mt-info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      max-width: 720px;
      margin: 0 auto 2rem;
      padding: 0.7rem 1rem;
      background: #fff8ef;
      border: 1px solid var(--color-highlight);
      border-radius: var(--radius-md);
      color: var(--color-text);
      font-size: 0.88rem;
      line-height: 1.4;
    }
    .mt-info iconify-icon { color: var(--color-highlight); flex-shrink: 0; }

    /* ── Variant grid ── */
    .mt-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
      gap: 1rem;
    }
    .mt-card {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.25rem 1.1rem 1rem;
      gap: 0.45rem;
      border: 2px solid var(--color-border);
      background: var(--color-surface);
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
      text-align: left;
      font: inherit;
    }
    .mt-card:hover {
      transform: translateY(-3px);
      border-color: var(--color-primary);
      box-shadow: 0 12px 28px rgba(22,22,42,0.10);
    }
    .mt-card:focus-visible {
      outline: 3px solid var(--color-accent);
      outline-offset: 2px;
    }
    .mt-card--official { background: linear-gradient(180deg, #fff, #fbfbf7); }
    .mt-card--official:hover { border-color: var(--color-secondary); }
    .mt-card--extra { background: linear-gradient(180deg, #fff, #fdf6ee); }
    .mt-card--extra:hover { border-color: var(--color-highlight); }

    .mt-card-num {
      font-size: 2.4rem;
      font-weight: 800;
      color: var(--color-primary);
      line-height: 1;
    }
    .mt-card-source {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.18rem 0.55rem;
      border-radius: 999px;
      font-size: 0.7rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .mt-card--official .mt-card-source { background: #e7f1ec; color: var(--color-secondary); }
    .mt-card--extra .mt-card-source { background: #fbecd5; color: #8a5a1a; }
    .mt-card-title {
      font-weight: 700;
      font-size: 1rem;
      color: var(--color-text);
    }
    .mt-card-meta {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      color: var(--color-text-muted);
      font-size: 0.82rem;
    }
    .mt-card-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      margin-top: 0.4rem;
      color: var(--color-accent);
      font-weight: 700;
      font-size: 0.9rem;
    }

    /* ── Quiz ── */
    .mt-quiz { max-width: 780px; margin: 0 auto; }
    .mt-quiz-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }
    .mt-back {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-text-light);
      padding: 0.35rem 0.5rem;
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 0.9rem;
    }
    .mt-back:hover { color: var(--color-primary); background: var(--color-border-light); }
    .mt-quiz-title {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--color-primary);
      font-weight: 700;
      font-size: 1.1rem;
    }
    .mt-quiz-progress {
      font-weight: 700;
      color: var(--color-text-light);
      background: var(--color-border-light);
      padding: 0.3rem 0.7rem;
      border-radius: var(--radius-xl);
      font-size: 0.85rem;
    }

    .mt-questions { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
    .mt-q { padding: 1.5rem; }
    .mt-q-prompt {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--color-primary);
      line-height: 1.55;
      margin: 0 0 1rem;
      white-space: pre-line;
    }

    .mt-options { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.55rem; }
    .mt-option {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      width: 100%;
      padding: 0.75rem 0.9rem;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-md);
      background: var(--color-surface);
      font: inherit;
      cursor: pointer;
      text-align: left;
      transition: all var(--transition-fast);
    }
    .mt-option:hover { border-color: var(--color-primary); background: var(--color-border-light); }
    .mt-option.selected { border-color: var(--color-primary); background: var(--color-border-light); }
    .mt-option:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 1px; }
    .mt-letter {
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--color-border-light);
      color: var(--color-text-light);
      font-size: 0.78rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .mt-option.selected .mt-letter { background: var(--color-primary); color: var(--color-text-on-primary); }
    .mt-opt-text { color: var(--color-text); font-size: 0.95rem; line-height: 1.4; }

    /* ── Fill blanks ── */
    .mt-fill { display: flex; flex-direction: column; gap: 0.6rem; }
    .mt-fill-row { display: flex; flex-direction: column; gap: 0.3rem; }
    .mt-fill-label {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.78rem;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-weight: 700;
    }
    .mt-input, .mt-textarea {
      padding: 0.65rem 0.85rem;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-md);
      background: var(--color-surface);
      color: var(--color-text);
      font: inherit;
      font-size: 0.95rem;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }
    .mt-input:focus, .mt-textarea:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(22,22,42,0.08);
    }
    .mt-textarea { resize: vertical; min-height: 64px; line-height: 1.5; }

    /* ── Scenario ── */
    .mt-scenario-hint {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.85rem;
      color: var(--color-text-muted);
      margin: 0 0 0.75rem;
    }
    .mt-scenario { display: flex; flex-direction: column; gap: 1.1rem; }
    .mt-sc-row {
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
      border: none;
      padding: 0;
      margin: 0;
      min-width: 0;
    }
    .mt-sc-label {
      font-weight: 700;
      color: var(--color-primary);
      font-size: 0.95rem;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }
    .mt-sc-row .mt-options { gap: 0.45rem; }

    /* ── Action buttons ── */
    .mt-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-top: 1.5rem;
      padding: 1.25rem 0 0;
      border-top: 1px solid var(--color-border);
      flex-wrap: wrap;
    }
    .btn-lg { padding: 0.85rem 1.6rem; font-size: 1rem; }

    /* ── Results ── */
    .mt-results { max-width: 780px; margin: 0 auto; }
    .mt-result-summary {
      text-align: center;
      padding: 2rem 1.5rem;
      margin-bottom: 1.5rem;
    }
    .mt-result-icon {
      width: 76px; height: 76px;
      margin: 0 auto 0.75rem;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      background: var(--color-border-light);
    }
    .mt-result-icon.mt-good { background: #e7f1ec; color: var(--color-secondary); }
    .mt-result-icon.mt-mid { background: #fbecd5; color: var(--color-highlight); }
    .mt-result-icon.mt-low { background: #fce4ec; color: var(--color-accent); }
    .mt-result-summary h1 { color: var(--color-primary); margin: 0.25rem 0 0; font-size: 1.6rem; }
    .mt-result-variant { color: var(--color-text-muted); font-size: 0.9rem; margin: 0.25rem 0 1rem; }
    .mt-score { display: flex; justify-content: center; align-items: baseline; gap: 0.25rem; }
    .mt-score-num { font-size: 3.5rem; font-weight: 800; color: var(--color-primary); }
    .mt-score-divider { font-size: 1.8rem; color: var(--color-text-muted); }
    .mt-score-tot { font-size: 1.8rem; color: var(--color-text-muted); }
    .mt-score-bar {
      height: 10px;
      background: var(--color-border);
      border-radius: 5px;
      overflow: hidden;
      max-width: 320px;
      margin: 1rem auto 0.75rem;
    }
    .mt-score-fill { height: 100%; transition: width 0.6s ease; }
    .mt-score-fill.high { background: var(--color-secondary); }
    .mt-score-fill.med { background: var(--color-highlight); }
    .mt-score-fill.low { background: var(--color-accent); }
    .mt-result-msg { margin: 0.5rem 0 1.25rem; color: var(--color-text-light); }
    .mt-result-actions { display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; }
    .mt-result-actions-bottom { margin-top: 1.5rem; }

    /* ── Review cards ── */
    .mt-review { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
    .mt-rev { padding: 1.25rem 1.5rem; border-left: 4px solid var(--color-border); }
    .mt-rev.is-correct { border-left-color: var(--color-secondary); }
    .mt-rev.is-wrong { border-left-color: var(--color-accent); }

    .mt-rev-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }
    .mt-rev-num {
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--color-primary);
      color: var(--color-text-on-primary);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
    }
    .mt-rev-status {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.85rem;
      font-weight: 700;
      padding: 0.25rem 0.7rem;
      border-radius: 999px;
    }
    .mt-rev.is-correct .mt-rev-status { background: #e7f1ec; color: var(--color-secondary); }
    .mt-rev.is-wrong .mt-rev-status { background: #fce4ec; color: var(--color-accent); }
    .mt-rev-prompt {
      font-weight: 600;
      color: var(--color-primary);
      margin: 0 0 0.85rem;
      line-height: 1.55;
      white-space: pre-line;
    }

    .mt-rev-mcq { display: flex; flex-direction: column; gap: 0.45rem; }
    .mt-rev-opt {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.6rem 0.85rem;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-md);
      background: var(--color-surface);
      font-size: 0.92rem;
      color: var(--color-text);
      position: relative;
      transition: background var(--transition-fast);
    }
    .mt-rev-opt-text { flex: 1; line-height: 1.45; }
    .mt-rev-opt.correct-opt {
      border-color: var(--color-secondary);
      background: #d8efe1;
      color: #134022;
      font-weight: 600;
    }
    .mt-rev-opt.correct-opt .mt-letter {
      background: var(--color-secondary);
      color: #fff;
    }
    .mt-rev-opt.wrong-pick {
      border-color: var(--color-accent);
      background: #fbd6da;
      color: #6c1c1c;
      font-weight: 600;
      text-decoration: line-through;
      text-decoration-color: rgba(179,52,38,0.55);
      text-decoration-thickness: 2px;
    }
    .mt-rev-opt.wrong-pick .mt-letter {
      background: var(--color-accent);
      color: #fff;
    }
    .mt-rev-opt.user-pick:not(.correct-opt):not(.wrong-pick) { border-color: var(--color-primary); }
    .mt-rev-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      margin-left: auto;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-weight: 800;
      text-decoration: none;
      flex-shrink: 0;
    }
    .mt-rev-tag-good { background: var(--color-secondary); color: #fff; }
    .mt-rev-tag-bad { background: var(--color-accent); color: #fff; }

    .mt-rev-fill { display: flex; flex-direction: column; gap: 0.6rem; }
    .mt-rev-blank {
      padding: 0.75rem 0.95rem;
      border-radius: var(--radius-md);
      border: 2px solid var(--color-border);
      background: var(--color-surface);
    }
    .mt-rev-blank.ok { border-color: var(--color-secondary); background: #d8efe1; }
    .mt-rev-blank.bad { border-color: var(--color-accent); background: #fbd6da; }
    .mt-rev-blank-label {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.74rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--color-text-muted);
      font-weight: 700;
      margin-bottom: 0.4rem;
    }
    .mt-rev-blank-row { display: flex; gap: 0.5rem; align-items: baseline; flex-wrap: wrap; line-height: 1.5; }
    .mt-rev-blank-tag {
      font-size: 0.72rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 0.15rem 0.55rem;
      border-radius: 999px;
      font-weight: 800;
      flex-shrink: 0;
    }
    .mt-rev-blank.bad .mt-rev-blank-tag { background: var(--color-accent); color: #fff; }
    .mt-rev-blank.ok .mt-rev-blank-tag { background: var(--color-secondary); color: #fff; }
    .mt-rev-blank-tag.mt-good { background: var(--color-secondary); color: #fff; }
    .mt-rev-blank-user { color: var(--color-text); font-weight: 700; }
    .mt-rev-blank.bad .mt-rev-blank-user {
      color: #6c1c1c;
      text-decoration: line-through;
      text-decoration-color: rgba(179,52,38,0.55);
      text-decoration-thickness: 2px;
    }
    .mt-rev-blank.ok .mt-rev-blank-user { color: #134022; }
    .mt-rev-blank-correct { color: #134022; font-weight: 800; }

    .mt-rev-scenario { display: flex; flex-direction: column; gap: 0.85rem; }
    .mt-rev-sc-row {
      padding: 0.85rem 1rem 0.95rem;
      border-radius: var(--radius-md);
      border: 2px solid var(--color-border);
      background: var(--color-surface);
    }
    .mt-rev-sc-row.ok { border-color: var(--color-secondary); }
    .mt-rev-sc-row.bad { border-color: var(--color-accent); }
    .mt-rev-sc-row .mt-rev-mcq { margin-top: 0.4rem; }
    .mt-rev-sc-row .mt-rev-opt { font-size: 0.88rem; }
    .mt-rev-sc-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
    .mt-rev-sc-label { font-weight: 800; color: var(--color-primary); }
    .mt-rev-sc-status {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-weight: 800;
    }
    .mt-rev-sc-row.ok .mt-rev-sc-status { background: var(--color-secondary); color: #fff; }
    .mt-rev-sc-row.bad .mt-rev-sc-status { background: var(--color-accent); color: #fff; }
    .mt-rev-sc-body { display: flex; flex-direction: column; gap: 0.55rem; }
    .mt-rev-sc-block {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      padding: 0.55rem 0.7rem;
      background: rgba(255,255,255,0.55);
      border-radius: var(--radius-sm);
      border-left: 3px solid var(--color-border);
    }
    .mt-rev-sc-row.bad .mt-rev-sc-block:first-child { border-left-color: var(--color-accent); }
    .mt-rev-sc-row.bad .mt-rev-sc-block:last-child { border-left-color: var(--color-secondary); }
    .mt-rev-sc-row.ok .mt-rev-sc-block { border-left-color: var(--color-secondary); }
    .mt-rev-sc-tag {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-weight: 800;
      color: var(--color-text-muted);
    }
    .mt-rev-sc-tag.mt-good { color: var(--color-secondary); }
    .mt-rev-sc-row.bad .mt-rev-sc-block:first-child .mt-rev-sc-tag { color: var(--color-accent); }
    .mt-rev-sc-text { margin: 0; color: var(--color-text); font-size: 0.92rem; line-height: 1.5; white-space: pre-line; }
    .mt-rev-sc-row.bad .mt-rev-sc-block:first-child .mt-rev-sc-text { color: #6c1c1c; }
    .mt-rev-sc-row.ok .mt-rev-sc-block .mt-rev-sc-text { color: #134022; }
    .mt-rev-sc-expected { font-weight: 600; color: #134022; }

    .mt-rev-explain {
      margin-top: 0.95rem;
      padding: 0.7rem 0.9rem;
      background: #f7f5f2;
      border-radius: var(--radius-md);
      font-size: 0.9rem;
    }
    .mt-rev-explain summary {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
      color: var(--color-primary);
      font-weight: 600;
    }
    .mt-rev-explain summary::-webkit-details-marker { display: none; }
    .mt-rev-explain p { margin: 0.5rem 0 0; color: var(--color-text-light); line-height: 1.55; }

    /* Always-visible variant for incorrect answers — no toggle, gold accent */
    .mt-rev-explain-shown {
      background: #fff7e6;
      border-left: 4px solid var(--color-highlight);
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .mt-rev-explain-head {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: #8a5a1a;
      font-weight: 800;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .mt-rev-explain-shown p { margin: 0; color: var(--color-text); line-height: 1.55; }
  `,
})
export class MidtermPage {
  protected readonly langService = inject(LanguageService);
  protected readonly variants = MIDTERM_VARIANTS;
  protected readonly totalQuestions = MIDTERM_VARIANTS.reduce((sum, v) => sum + v.questions.length, 0);
  protected readonly officialCount = MIDTERM_VARIANTS.filter((v) => v.source === 'official').length;
  protected readonly extraCount = MIDTERM_VARIANTS.filter((v) => v.source === 'extra').length;

  protected readonly phase = signal<Phase>('select');
  protected readonly activeVariant = signal<MidtermVariant | null>(null);
  // answers indexed by question position within the active variant
  protected readonly answers = signal<AnswerState[]>([]);
  protected readonly results = signal<QuestionResult[]>([]);

  protected readonly totalScore = computed(() =>
    this.results().reduce((sum, r) => {
      if (r.question.type === 'mcq') return sum + (r.isCorrect ? 1 : 0);
      if (r.question.type === 'fill') {
        const total = r.question.blanks?.length ?? 0;
        const got = r.blankCorrect?.filter(Boolean).length ?? 0;
        return sum + (total > 0 ? got / total : 0);
      }
      // scenario
      const fields = r.question.scenarioFields ?? [];
      const got = fields.filter((f) => r.scenarioCorrect?.[f.key]).length;
      return sum + (fields.length > 0 ? got / fields.length : 0);
    }, 0)
  );
  protected readonly maxScore = computed(() => this.activeVariant()?.questions.length ?? 0);
  protected readonly scorePercent = computed(() => {
    const max = this.maxScore();
    if (!max) return 0;
    return Math.round((this.totalScore() / max) * 100);
  });

  protected readonly filledCount = computed(() => {
    const v = this.activeVariant();
    if (!v) return 0;
    return v.questions.reduce((acc, q, i) => acc + (this.isAnswerFilled(q, this.answers()[i]) ? 1 : 0), 0);
  });

  startVariant(v: MidtermVariant) {
    this.activeVariant.set(v);
    this.answers.set(v.questions.map((q) => this.emptyAnswer(q)));
    this.results.set([]);
    this.phase.set('quiz');
    queueMicrotask(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  private emptyAnswer(q: MidtermQuestion): AnswerState {
    if (q.type === 'mcq') return { mcqIndex: undefined };
    if (q.type === 'fill') return { blanks: (q.blanks ?? []).map(() => '') };
    return { scenario: {} };
  }

  backToSelect() {
    this.phase.set('select');
    this.activeVariant.set(null);
    this.results.set([]);
    queueMicrotask(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  retry() {
    const v = this.activeVariant();
    if (v) this.startVariant(v);
  }

  resetCurrent() {
    const v = this.activeVariant();
    if (v) this.answers.set(v.questions.map((q) => this.emptyAnswer(q)));
  }

  // ── Answer accessors ──
  getMcq(qi: number): number | undefined {
    return this.answers()[qi]?.mcqIndex;
  }
  setMcq(qi: number, oi: number) {
    const next = this.answers().slice();
    next[qi] = { ...next[qi], mcqIndex: oi };
    this.answers.set(next);
  }
  getBlank(qi: number, bi: number): string {
    return this.answers()[qi]?.blanks?.[bi] ?? '';
  }
  setBlank(qi: number, bi: number, val: string) {
    const next = this.answers().slice();
    const blanks = (next[qi]?.blanks ?? []).slice();
    blanks[bi] = val;
    next[qi] = { ...next[qi], blanks };
    this.answers.set(next);
  }
  getScenario(qi: number, key: string): number | undefined {
    return this.answers()[qi]?.scenario?.[key];
  }
  setScenario(qi: number, key: string, val: number) {
    const next = this.answers().slice();
    const scenario = { ...(next[qi]?.scenario ?? {}) };
    scenario[key] = val;
    next[qi] = { ...next[qi], scenario };
    this.answers.set(next);
  }

  // ── Submission / grading ──
  submit() {
    const v = this.activeVariant();
    if (!v) return;
    const answers = this.answers();

    const out: QuestionResult[] = v.questions.map((q, i) => {
      const a: AnswerState = answers[i] ?? {};
      if (q.type === 'mcq') {
        const isCorrect = a.mcqIndex === q.correctIndex;
        return { question: q, answer: a, isCorrect };
      }
      if (q.type === 'fill') {
        const blankCorrect = (q.blanks ?? []).map((b, bi) =>
          fillMatches(a.blanks?.[bi] ?? '', b.answer, b.accepts)
        );
        return {
          question: q,
          answer: a,
          isCorrect: blankCorrect.every(Boolean),
          blankCorrect,
        };
      }
      // scenario — each field is its own MCQ
      const scenarioCorrect: Record<string, boolean> = {};
      for (const f of q.scenarioFields ?? []) {
        scenarioCorrect[f.key] = a.scenario?.[f.key] === f.correctIndex;
      }
      const allOk = (q.scenarioFields ?? []).every((f) => scenarioCorrect[f.key]);
      return { question: q, answer: a, isCorrect: allOk, scenarioCorrect };
    });

    this.results.set(out);
    this.phase.set('results');
    queueMicrotask(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── Helpers ──
  optionLetter(i: number): string {
    return ['ა', 'ბ', 'გ', 'დ'][i] ?? String.fromCharCode(65 + i);
  }

  formatPromptLine(p: string): string {
    return p;
  }

  private isAnswerFilled(q: MidtermQuestion, a: AnswerState | undefined): boolean {
    if (!a) return false;
    if (q.type === 'mcq') return a.mcqIndex !== undefined;
    if (q.type === 'fill') return (a.blanks ?? []).every((b) => b.trim().length > 0);
    return (q.scenarioFields ?? []).every((f) => a.scenario?.[f.key] !== undefined);
  }
}
