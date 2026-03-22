import { Component, ChangeDetectionStrategy, inject, signal, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CHAPTERS, QUIZZES } from '../../data/book-data';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { LanguageService } from '../../services/language.service';
import { Chapter, Quiz } from '../../data/book-data';

@Component({
  selector: 'app-chapter-detail',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (chapter(); as ch) {
      <div class="page">
        <div class="container">
          <a routerLink="/chapters" class="back-link"><iconify-icon icon="mdi:arrow-left" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('chapterDetail.backToChapters') }}</a>

          <div class="detail-header">
            <span class="ch-icon"><iconify-icon [attr.icon]="ch.icon" width="40" height="40"></iconify-icon></span>
            <div>
              <span class="ch-num">{{ t.t('chapters.chapter') }} {{ ch.id }}</span>
              <h1 class="page-title">{{ ch.title }}</h1>
              <p class="ch-ka">{{ ch.titleKa }}</p>
            </div>
          </div>

          <!-- Mark progress buttons -->
          @if (auth.isLoggedIn()) {
            <div class="progress-buttons">
              <button class="btn btn-outline" (click)="markProgress('in_progress')"><iconify-icon icon="mdi:progress-clock" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('chapterDetail.markInProgress') }}</button>
              <button class="btn btn-accent" (click)="markProgress('completed')"><iconify-icon icon="mdi:check-circle-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('chapterDetail.markCompleted') }}</button>
            </div>
          }

          <div class="detail-grid">
            <div class="summary-card card">
              <h2>{{ t.t('chapterDetail.summary') }}</h2>
              <p>{{ ch.summary }}</p>
            </div>

            <div class="sidebar">
              <div class="card topics-card">
                <h3>{{ t.t('chapterDetail.keyTopics') }}</h3>
                <ul class="topics-list">
                  @for (topic of ch.keyTopics; track topic) {
                    <li>{{ topic }}</li>
                  }
                </ul>
              </div>

              @if (quiz()) {
                <a [routerLink]="['/quiz', ch.id]" class="quiz-cta card">
                  <span class="quiz-cta-icon"><iconify-icon icon="mdi:target" width="28" height="28"></iconify-icon></span>
                  <div>
                    <strong>{{ t.t('chapterDetail.takeTheQuiz') }}</strong>
                    <p>{{ quiz()!.questions.length }} {{ t.t('chapterDetail.questions') }}</p>
                  </div>
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: `
    .back-link {
      display: inline-block;
      color: var(--color-text-light);
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    .back-link:hover { color: var(--color-accent); }

    .detail-header {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-bottom: 2rem;
    }

    .ch-icon {
      font-size: 3rem;
      flex-shrink: 0;
    }

    .ch-num {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .ch-ka {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      margin-top: 0.15rem;
    }

    .progress-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
    }

    .summary-card h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .summary-card p {
      line-height: 1.8;
      color: var(--color-text-light);
    }

    .topics-card h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      color: var(--color-primary);
    }

    .topics-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .topics-list li {
      padding: 0.5rem 0.75rem;
      background: var(--color-border-light);
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      color: var(--color-text);
    }

    .quiz-cta {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      margin-top: 1rem;
      cursor: pointer;
      border: 2px solid var(--color-accent);
    }

    .quiz-cta:hover {
      background: rgba(224, 122, 95, 0.05);
    }

    .quiz-cta-icon { font-size: 2rem; }

    .quiz-cta strong {
      color: var(--color-primary);
      display: block;
    }

    .quiz-cta p {
      color: var(--color-text-muted);
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      .detail-grid { grid-template-columns: 1fr; }
    }
  `
})
export class ChapterDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly auth = inject(AuthService);
  private readonly progressService = inject(ProgressService);
  protected readonly t = inject(LanguageService);

  protected readonly chapter = signal<Chapter | undefined>(undefined);
  protected readonly quiz = signal<Quiz | undefined>(undefined);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chapter.set(CHAPTERS.find(c => c.id === id));
    this.quiz.set(QUIZZES.find(q => q.chapterId === id));
  }

  markProgress(status: string) {
    const ch = this.chapter();
    if (!ch) return;
    this.progressService.updateChapter(ch.id, status).subscribe();
  }
}
