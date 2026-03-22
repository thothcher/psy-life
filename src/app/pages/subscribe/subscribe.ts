import { Component, ChangeDetectionStrategy, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-subscribe',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">
            <iconify-icon icon="mdi:crown-outline" style="vertical-align: -0.125em"></iconify-icon>
            {{ t.t('subscribe.title') }}
          </h1>
          <p class="page-subtitle">{{ t.t('subscribe.subtitle') }}</p>
        </div>

        <div class="pricing-wrapper">
          <!-- Current status -->
          @if (auth.currentUser(); as user) {
            <div class="status-banner" [class.expired]="user.subscriptionStatus === 'expired'" [class.trial]="user.subscriptionStatus === 'trial'">
              <iconify-icon [icon]="user.subscriptionStatus === 'expired' ? 'mdi:alert-circle-outline' : 'mdi:clock-outline'" width="20" height="20"></iconify-icon>
              @if (user.subscriptionStatus === 'expired') {
                <span>{{ t.t('subscribe.expiredBanner') }}</span>
              } @else if (user.subscriptionStatus === 'trial') {
                <span>{{ t.t('subscribe.trialBanner', { days: auth.trialDaysLeft().toString() }) }}</span>
              }
            </div>
          }

          <!-- Pricing card -->
          <div class="pricing-card card">
            <div class="price-header">
              <span class="plan-name">{{ t.t('subscribe.planName') }}</span>
              <div class="price">
                <span class="price-amount">₾5</span>
                <span class="price-period">/ {{ t.t('subscribe.month') }}</span>
              </div>
            </div>

            <ul class="features-list">
              <li>
                <iconify-icon icon="mdi:check-circle" width="18" height="18" class="check-icon"></iconify-icon>
                {{ t.t('subscribe.feature1') }}
              </li>
              <li>
                <iconify-icon icon="mdi:check-circle" width="18" height="18" class="check-icon"></iconify-icon>
                {{ t.t('subscribe.feature2') }}
              </li>
              <li>
                <iconify-icon icon="mdi:check-circle" width="18" height="18" class="check-icon"></iconify-icon>
                {{ t.t('subscribe.feature3') }}
              </li>
              <li>
                <iconify-icon icon="mdi:check-circle" width="18" height="18" class="check-icon"></iconify-icon>
                {{ t.t('subscribe.feature4') }}
              </li>
              <li>
                <iconify-icon icon="mdi:check-circle" width="18" height="18" class="check-icon"></iconify-icon>
                {{ t.t('subscribe.feature5') }}
              </li>
            </ul>

            <div class="payment-section">
              <h3>{{ t.t('subscribe.howToPay') }}</h3>
              <div class="payment-step">
                <span class="step-num">1</span>
                <p>{{ t.t('subscribe.step1') }}</p>
              </div>
              <div class="payment-details card">
                <div class="bank-info">
                  <p><strong>{{ t.t('subscribe.bankName') }}:</strong> {{ t.t('subscribe.bankValue') }}</p>
                  <p><strong>IBAN:</strong> GE00TB0000000000000000</p>
                  <p><strong>{{ t.t('subscribe.receiver') }}:</strong> PsyLearn</p>
                  <p><strong>{{ t.t('subscribe.amount') }}:</strong> ₾5.00</p>
                  <p><strong>{{ t.t('subscribe.purpose') }}:</strong> PsyLearn - {{ auth.currentUser()?.username }}</p>
                </div>
              </div>
              <div class="payment-step">
                <span class="step-num">2</span>
                <p>{{ t.t('subscribe.step2') }}</p>
              </div>
              <div class="payment-step">
                <span class="step-num">3</span>
                <p>{{ t.t('subscribe.step3') }}</p>
              </div>
            </div>

            <div class="contact-note">
              <iconify-icon icon="mdi:email-outline" width="16" height="16" style="vertical-align: -0.15em"></iconify-icon>
              {{ t.t('subscribe.contactNote') }}
              <a routerLink="/contact">{{ t.t('subscribe.contactLink') }}</a>
            </div>
          </div>

          <!-- Free features info -->
          <div class="free-note card">
            <h3>
              <iconify-icon icon="mdi:gift-outline" width="18" height="18" style="vertical-align: -0.15em"></iconify-icon>
              {{ t.t('subscribe.freeTitle') }}
            </h3>
            <p>{{ t.t('subscribe.freeDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .pricing-wrapper {
      max-width: 560px;
      margin: 0 auto;
    }

    .status-banner {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.85rem 1.25rem;
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    .status-banner.expired {
      background: #fbe9e7;
      color: #c62828;
      border: 1px solid #ef9a9a;
    }
    .status-banner.trial {
      background: #fff8e1;
      color: #f57f17;
      border: 1px solid #ffe082;
    }

    .pricing-card {
      padding: 2rem;
      margin-bottom: 1.5rem;
    }

    .price-header {
      text-align: center;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--color-border);
      margin-bottom: 1.5rem;
    }
    .plan-name {
      display: block;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-text-muted);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .price-amount {
      font-size: 3rem;
      font-weight: 900;
      color: var(--color-primary);
    }
    .price-period {
      font-size: 1rem;
      color: var(--color-text-muted);
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem;
    }
    .features-list li {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.55rem 0;
      font-size: 0.95rem;
      color: var(--color-text);
    }
    .check-icon {
      color: #2e7d32;
      flex-shrink: 0;
    }

    .payment-section {
      padding-top: 1rem;
      border-top: 1px solid var(--color-border);
    }
    .payment-section h3 {
      font-size: 1.05rem;
      color: var(--color-primary);
      margin-bottom: 1.25rem;
    }

    .payment-step {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }
    .step-num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--color-accent);
      color: white;
      font-size: 0.8rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .payment-step p {
      font-size: 0.9rem;
      color: var(--color-text);
      line-height: 1.6;
      margin: 0;
      padding-top: 0.2rem;
    }

    .payment-details {
      padding: 1rem 1.25rem;
      margin: 0 0 1rem 2.5rem;
      background: var(--color-bg);
    }
    .bank-info p {
      font-size: 0.85rem;
      margin: 0.3rem 0;
      color: var(--color-text);
    }

    .contact-note {
      margin-top: 1.5rem;
      padding: 0.85rem 1rem;
      border-radius: var(--radius-md);
      background: var(--color-bg);
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }
    .contact-note a {
      color: var(--color-accent);
      font-weight: 600;
    }

    .free-note {
      padding: 1.5rem;
      text-align: center;
    }
    .free-note h3 {
      font-size: 1rem;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }
    .free-note p {
      font-size: 0.9rem;
      color: var(--color-text-light);
      line-height: 1.6;
    }
  `
})
export class SubscribePage {
  protected readonly auth = inject(AuthService);
  protected readonly t = inject(LanguageService);
}
