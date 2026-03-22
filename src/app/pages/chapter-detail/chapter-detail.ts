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
            <div class="main-content">
              <div class="summary-card card">
                <h2><iconify-icon icon="mdi:text-box-outline" style="vertical-align: -0.125em; margin-right: 0.4rem"></iconify-icon>{{ t.t('chapterDetail.summary') }}</h2>
                <p>{{ ch.summary }}</p>
              </div>

              <div class="key-points-card card">
                <h2><iconify-icon icon="mdi:lightbulb-on-outline" style="vertical-align: -0.125em; margin-right: 0.4rem"></iconify-icon>Key Points</h2>
                <ol class="key-points-list">
                  @for (point of ch.keyPoints; track point; let i = $index) {
                    <li>
                      <span class="point-number">{{ i + 1 }}</span>
                      <span class="point-text">{{ point }}</span>
                    </li>
                  }
                </ol>
              </div>

              <div class="fun-fact-card card">
                <div class="fun-fact-badge">
                  <iconify-icon icon="mdi:star-four-points" width="20" height="20"></iconify-icon>
                  Fun Fact
                </div>
                <p>{{ ch.funFact }}</p>
              </div>

              <div class="real-world-card card">
                <h2><iconify-icon icon="mdi:earth" style="vertical-align: -0.125em; margin-right: 0.4rem"></iconify-icon>Real-World Application</h2>
                <p>{{ ch.realWorld }}</p>
              </div>
            </div>

            <div class="sidebar">
              <div class="card topics-card">
                <h3><iconify-icon icon="mdi:tag-multiple-outline" style="vertical-align: -0.125em; margin-right: 0.3rem"></iconify-icon>{{ t.t('chapterDetail.keyTopics') }}</h3>
                <ul class="topics-list">
                  @for (topic of ch.keyTopics; track topic) {
                    <li>{{ topic }}</li>
                  }
                </ul>
              </div>

              @if (ch.keyFigures && ch.keyFigures.length) {
                <div class="card figures-card">
                  <h3><iconify-icon icon="mdi:account-group-outline" style="vertical-align: -0.125em; margin-right: 0.3rem"></iconify-icon>Key Figures</h3>
                  <ul class="figures-list">
                    @for (figure of ch.keyFigures; track figure) {
                      <li><iconify-icon icon="mdi:account-circle-outline" style="vertical-align: -0.125em; margin-right: 0.3rem; color: var(--color-accent)"></iconify-icon>{{ figure }}</li>
                    }
                  </ul>
                </div>
              }

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
      align-items: start;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .summary-card h2,
    .key-points-card h2,
    .real-world-card h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .summary-card p,
    .real-world-card p {
      line-height: 1.8;
      color: var(--color-text-light);
    }

    /* Key Points */
    .key-points-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      counter-reset: none;
    }

    .key-points-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .point-number {
      flex-shrink: 0;
      width: 1.75rem;
      height: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--color-accent);
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      margin-top: 0.1rem;
    }

    .point-text {
      line-height: 1.65;
      color: var(--color-text-light);
    }

    /* Fun Fact */
    .fun-fact-card {
      background: linear-gradient(135deg, rgba(224,122,95,0.08), rgba(224,122,95,0.03));
      border-left: 4px solid var(--color-accent);
    }

    .fun-fact-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--color-accent);
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.3rem 0.75rem;
      border-radius: 999px;
      margin-bottom: 0.75rem;
    }

    .fun-fact-card p {
      line-height: 1.75;
      color: var(--color-text);
      font-style: italic;
    }

    /* Key Figures */
    .figures-card h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      color: var(--color-primary);
    }

    .figures-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .figures-list li {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      color: var(--color-text);
      padding: 0.35rem 0;
      border-bottom: 1px solid var(--color-border-light);
    }

    .figures-list li:last-child { border-bottom: none; }

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
      .sidebar { order: -1; }
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
