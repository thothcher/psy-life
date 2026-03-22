import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/** Redirects unauthenticated users to login page, unverified to verify page */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  if (!auth.isEmailVerified()) {
    router.navigate(['/verify-email']);
    return false;
  }

  return true;
};

/** Blocks expired trial / expired subscription users — redirects to /subscribe */
export const subscriptionGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isSubscriptionActive()) {
    return true;
  }

  router.navigate(['/subscribe']);
  return false;
};

/** Redirects non-admin users to home page */
export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAdmin()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
