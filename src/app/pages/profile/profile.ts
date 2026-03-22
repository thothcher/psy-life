import { Component, ChangeDetectionStrategy, signal, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:account-circle-outline" style="vertical-align: -0.125em"></iconify-icon> {{ t.t('profile.title') }}</h1>
        </div>

        <div class="profile-grid">
          <!-- User info -->
          <section class="profile-card card">
            <h2>{{ t.t('profile.accountInfo') }}</h2>
            @if (authService.currentUser(); as user) {
              @if (!editing()) {
                <div class="info-row">
                  <span class="info-label">{{ t.t('profile.displayName') }}</span>
                  <span class="info-value">{{ user.displayName || user.username }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">{{ t.t('profile.username') }}</span>
                  <span class="info-value">{{ user.username }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">{{ t.t('profile.email') }}</span>
                  <span class="info-value">{{ user.email }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">{{ t.t('profile.subscription') }}</span>
                  <span class="badge" [class.badge-accent]="user.subscriptionStatus === 'trial'" [class.badge-secondary]="user.subscriptionStatus === 'active'">
                    @if (user.subscriptionStatus === 'trial') {
                      <iconify-icon icon="mdi:gift-outline" style="vertical-align: -0.125em; margin-right: 0.2rem"></iconify-icon>{{ t.t('profile.freeTrial') }}
                    } @else if (user.subscriptionStatus === 'active') {
                      <iconify-icon icon="mdi:check-decagram" style="vertical-align: -0.125em; margin-right: 0.2rem"></iconify-icon>{{ t.t('profile.active') }}
                    } @else {
                      <iconify-icon icon="mdi:alert-circle-outline" style="vertical-align: -0.125em; margin-right: 0.2rem"></iconify-icon>{{ t.t('profile.expired') }}
                    }
                  </span>
                </div>
                <button class="btn btn-outline" style="margin-top: 1rem" (click)="startEditing()"><iconify-icon icon="mdi:pencil-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('profile.editProfile') }}</button>
              } @else {
                <div class="form-group">
                  <label class="form-label" for="displayName">{{ t.t('profile.displayName') }}</label>
                  <input id="displayName" class="form-input" [(ngModel)]="editName" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="editEmail">{{ t.t('profile.email') }}</label>
                  <input id="editEmail" class="form-input" type="email" [(ngModel)]="editEmail" />
                </div>
                <div class="form-actions">
                  <button class="btn btn-accent" (click)="saveProfile()"><iconify-icon icon="mdi:content-save-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('profile.save') }}</button>
                  <button class="btn btn-ghost" (click)="editing.set(false)"><iconify-icon icon="mdi:close" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('profile.cancel') }}</button>
                </div>
                @if (saveError()) {
                  <p class="error" role="alert">{{ saveError() }}</p>
                }
              }
            }
          </section>

          <!-- Progress -->
          <section class="progress-card card">
            <h2>{{ t.t('profile.myProgress') }}</h2>
            @if (progressData(); as data) {
              <div class="progress-stats">
                <div class="progress-stat">
                  <span class="stat-num">{{ data.chaptersCompleted }}</span>
                  <span class="stat-text">{{ t.t('profile.chaptersCompleted') }}</span>
                </div>
                <div class="progress-stat">
                  <span class="stat-num">{{ data.quizzesTaken }}</span>
                  <span class="stat-text">{{ t.t('profile.quizzesTaken') }}</span>
                </div>
                <div class="progress-stat">
                  <span class="stat-num">{{ data.avgScore }}%</span>
                  <span class="stat-text">{{ t.t('profile.avgQuizScore') }}</span>
                </div>
                <div class="progress-stat">
                  <span class="stat-num">{{ data.notesCount }}</span>
                  <span class="stat-text">{{ t.t('profile.notesWritten') }}</span>
                </div>
              </div>
            } @else {
              <p class="text-muted">{{ t.t('profile.loadingProgress') }}</p>
            }
          </section>

          <!-- Subscription -->
          <section class="sub-card card">
            <h2>{{ t.t('profile.subscriptionSection') }}</h2>
            @if (authService.currentUser(); as user) {
              @if (user.subscriptionStatus === 'trial') {
                <div class="sub-info">
                  <p [innerHTML]="t.t('profile.trialText')"></p>
                  <p class="text-muted">{{ t.t('profile.trialSubText') }}</p>
                </div>
              } @else if (user.subscriptionStatus === 'active') {
                <div class="sub-info">
                  <p [innerHTML]="t.t('profile.activeText')"></p>
                </div>
              } @else {
                <div class="sub-info">
                  <p [innerHTML]="t.t('profile.expiredText')"></p>
                  <button class="btn btn-accent" style="margin-top: 1rem"><iconify-icon icon="mdi:credit-card-refresh-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('profile.renewSubscription') }}</button>
                </div>
              }
            }
          </section>
        </div>
      </div>
    </div>
  `,
  styles: `
    .profile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .profile-card, .progress-card, .sub-card {
      padding: 1.5rem;
    }
    .sub-card {
      grid-column: 1 / -1;
    }

    h2 {
      color: var(--color-primary);
      font-size: 1.15rem;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--color-border);
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0;
      border-bottom: 1px dashed var(--color-border);
    }
    .info-label {
      color: var(--color-text-muted);
      font-size: 0.9rem;
    }
    .info-value {
      font-weight: 600;
      color: var(--color-text);
      font-size: 0.9rem;
    }

    .form-actions { display: flex; gap: 0.75rem; margin-top: 1rem; }
    .error { color: #e74c3c; font-size: 0.85rem; margin-top: 0.5rem; }

    .progress-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .progress-stat {
      text-align: center;
      padding: 1rem;
      background: var(--color-bg);
      border-radius: var(--radius-md);
    }
    .stat-num {
      display: block;
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--color-accent);
    }
    .stat-text {
      font-size: 0.8rem;
      color: var(--color-text-muted);
    }

    .sub-info p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--color-text-light);
      margin-bottom: 0.5rem;
    }

    @media (max-width: 640px) {
      .profile-grid { grid-template-columns: 1fr; }
    }
  `
})
export class ProfilePage implements OnInit {
  protected readonly authService = inject(AuthService);
  private readonly progressService = inject(ProgressService);
  protected readonly t = inject(LanguageService);

  protected readonly editing = signal(false);
  protected readonly saveError = signal('');
  protected readonly progressData = signal<{
    chaptersCompleted: number;
    quizzesTaken: number;
    avgScore: number;
    notesCount: number;
  } | null>(null);

  protected editName = '';
  protected editEmail = '';

  ngOnInit() {
    this.loadProgress();
  }

  startEditing() {
    const user = this.authService.currentUser();
    if (user) {
      this.editName = user.displayName || user.username;
      this.editEmail = user.email;
      this.editing.set(true);
      this.saveError.set('');
    }
  }

  saveProfile() {
    this.authService.updateProfile({
      displayName: this.editName,
      email: this.editEmail
    }).subscribe({
      next: () => {
        this.editing.set(false);
        this.authService.refreshProfile().subscribe();
      },
      error: (err: { error?: { error?: string } }) => {
        this.saveError.set(err.error?.error || 'Failed to update profile');
      }
    });
  }

  private loadProgress() {
    this.progressService.getProgress().subscribe({
      next: (data) => {
        const completed = data.chapters?.filter(c => c.status === 'completed').length || 0;
        const quizzes = data.quizzes?.length || 0;
        const avgScore = quizzes > 0
          ? Math.round(data.quizzes.reduce((sum, q) => sum + q.bestScore, 0) / quizzes)
          : 0;
        this.progressData.set({
          chaptersCompleted: completed,
          quizzesTaken: quizzes,
          avgScore,
          notesCount: 0
        });
      },
      error: () => {}
    });
  }
}
