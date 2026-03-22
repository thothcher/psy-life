import { Component, ChangeDetectionStrategy, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">{{ t.t('home.badge') }}</span>
          <h1 class="hero-title">ფსიქოლოგია და ცხოვრება</h1>
          <p class="hero-author">Philip Zimbardo</p>
          <p class="hero-desc">{{ t.t('home.desc') }}</p>
          <div class="hero-actions">
            <a routerLink="/chapters" class="btn btn-accent">{{ t.t('home.explore') }}</a>
            <a routerLink="/register" class="btn btn-outline">{{ t.t('home.getStarted') }}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <span class="hero-emoji"><iconify-icon icon="mdi:head-cog-outline" width="24" height="24"></iconify-icon></span>
            <span class="big-number">16</span>
            <span class="label">{{ t.t('home.chapters') }}</span>
          </div>
          <div class="hero-card">
            <span class="hero-emoji"><iconify-icon icon="mdi:help-circle-outline" width="24" height="24"></iconify-icon></span>
            <span class="big-number">150+</span>
            <span class="label">{{ t.t('home.quizQuestions') }}</span>
          </div>
          <div class="hero-card">
            <span class="hero-emoji"><iconify-icon icon="mdi:cards-outline" width="24" height="24"></iconify-icon></span>
            <span class="big-number">24</span>
            <span class="label">{{ t.t('home.memoryCards') }}</span>
          </div>
          <div class="hero-card">
            <span class="hero-emoji"><iconify-icon icon="mdi:account-school" width="24" height="24"></iconify-icon></span>
            <span class="big-number">16</span>
            <span class="label">{{ t.t('home.psychologists') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">{{ t.t('home.sectionTitle') }}</h2>
        <div class="features-grid">
          <a routerLink="/chapters" class="feature-card">
            <span class="feature-icon"><iconify-icon icon="mdi:map-marker-path" width="28" height="28"></iconify-icon></span>
            <h3>{{ t.t('home.chapterRoadmap') }}</h3>
            <p>{{ t.t('home.chapterRoadmapDesc') }}</p>
          </a>
          <a routerLink="/quiz/1" class="feature-card">
            <span class="feature-icon"><iconify-icon icon="mdi:target" width="28" height="28"></iconify-icon></span>
            <h3>{{ t.t('home.interactiveQuizzes') }}</h3>
            <p>{{ t.t('home.interactiveQuizzesDesc') }}</p>
          </a>
          <a routerLink="/memory-game" class="feature-card">
            <span class="feature-icon"><iconify-icon icon="mdi:cards-outline" width="28" height="28"></iconify-icon></span>
            <h3>{{ t.t('home.memoryCardGame') }}</h3>
            <p>{{ t.t('home.memoryCardGameDesc') }}</p>
          </a>
          <a routerLink="/facts" class="feature-card">
            <span class="feature-icon"><iconify-icon icon="mdi:lightbulb-on-outline" width="28" height="28"></iconify-icon></span>
            <h3>{{ t.t('home.fascinatingFacts') }}</h3>
            <p>{{ t.t('home.fascinatingFactsDesc') }}</p>
          </a>
          <a routerLink="/psychologists" class="feature-card">
            <span class="feature-icon"><iconify-icon icon="mdi:trophy-outline" width="28" height="28"></iconify-icon></span>
            <h3>{{ t.t('home.famousPsychologists') }}</h3>
            <p>{{ t.t('home.famousPsychologistsDesc') }}</p>
          </a>
          <a routerLink="/stories" class="feature-card">
            <span class="feature-icon"><iconify-icon icon="mdi:book-open-page-variant" width="28" height="28"></iconify-icon></span>
            <h3>{{ t.t('home.psychologyStories') }}</h3>
            <p>{{ t.t('home.psychologyStoriesDesc') }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>{{ t.t('home.ctaTitle') }}</h2>
          <p>{{ t.t('home.ctaDesc') }}</p>
          <a routerLink="/register" class="btn btn-accent">{{ t.t('home.startFree') }}</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      padding: 4rem 0 3rem;
    }

    .hero .container {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    .hero-content {
      flex: 1;
    }

    .hero-badge {
      display: inline-block;
      background: rgba(224, 122, 95, 0.1);
      color: var(--color-accent);
      padding: 0.4rem 1rem;
      border-radius: var(--radius-xl);
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
    }

    .hero-title {
      font-size: 2.8rem;
      font-weight: 800;
      color: var(--color-primary);
      line-height: 1.15;
      letter-spacing: -0.03em;
    }

    .hero-author {
      font-size: 1.2rem;
      color: var(--color-accent);
      font-weight: 600;
      margin-top: 0.5rem;
    }

    .hero-desc {
      color: var(--color-text-light);
      font-size: 1.1rem;
      margin-top: 1rem;
      max-width: 500px;
      line-height: 1.7;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .hero-visual {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      flex-shrink: 0;
    }

    .hero-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: all var(--transition-normal);
      min-width: 140px;
    }

    .hero-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }

    .hero-emoji {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .big-number {
      font-size: 2rem;
      font-weight: 800;
      color: var(--color-primary);
    }

    .label {
      font-size: 0.8rem;
      color: var(--color-text-muted);
      font-weight: 500;
    }

    /* Features */
    .features {
      padding: 3rem 0;
    }

    .section-title {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--color-primary);
      text-align: center;
      margin-bottom: 2rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .feature-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2rem 1.5rem;
      text-decoration: none;
      transition: all var(--transition-normal);
      display: block;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-accent);
    }

    .feature-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .feature-card p {
      color: var(--color-text-light);
      font-size: 0.9rem;
      line-height: 1.6;
    }

    /* CTA */
    .cta {
      padding: 3rem 0;
    }

    .cta-card {
      background: var(--color-primary);
      border-radius: var(--radius-xl);
      padding: 3rem;
      text-align: center;
    }

    .cta-card h2 {
      color: var(--color-text-on-primary);
      font-size: 1.8rem;
      font-weight: 700;
    }

    .cta-card p {
      color: var(--color-text-on-primary);
      opacity: 0.8;
      margin: 1rem 0 1.5rem;
      font-size: 1.05rem;
    }

    @media (max-width: 900px) {
      .hero .container {
        flex-direction: column;
        text-align: center;
      }

      .hero-title { font-size: 2rem; }
      .hero-desc { max-width: 100%; }
      .hero-actions { justify-content: center; }
      .features-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 640px) {
      .hero-visual {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
      }
      .hero-card { min-width: auto; }
    }
  `
})
export class HomePage {
  protected readonly t = inject(LanguageService);
}
