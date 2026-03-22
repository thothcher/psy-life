import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError, throwError } from 'rxjs';

export interface User {
  id: number;
  email: string;
  username: string;
  displayName: string;
  role: 'user' | 'admin';
  subscriptionStatus: 'trial' | 'active' | 'expired';
  trialStartDate?: string;
  createdAt?: string;
  lastLogin?: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

const API_URL = 'http://localhost:3000/api/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  /** Current user signal */
  readonly currentUser = signal<User | null>(null);

  /** Computed auth state helpers */
  readonly isLoggedIn = computed(() => !!this.currentUser());
  readonly isAdmin = computed(() => this.currentUser()?.role === 'admin');
  readonly token = signal<string | null>(null);

  constructor() {
    // Restore session from localStorage
    const savedToken = localStorage.getItem('psy_token');
    const savedUser = localStorage.getItem('psy_user');
    if (savedToken && savedUser) {
      this.token.set(savedToken);
      try {
        this.currentUser.set(JSON.parse(savedUser));
      } catch {
        this.logout();
      }
    }
  }

  register(email: string, username: string, password: string, displayName: string) {
    return this.http.post<AuthResponse>(`${API_URL}/register`, {
      email, username, password, displayName
    }).pipe(
      tap(res => this.handleAuth(res)),
      catchError(err => throwError(() => err))
    );
  }

  login(login: string, password: string) {
    return this.http.post<AuthResponse>(`${API_URL}/login`, { login, password }).pipe(
      tap(res => this.handleAuth(res)),
      catchError(err => throwError(() => err))
    );
  }

  logout() {
    this.currentUser.set(null);
    this.token.set(null);
    localStorage.removeItem('psy_token');
    localStorage.removeItem('psy_user');
    this.router.navigate(['/login']);
  }

  refreshProfile() {
    return this.http.get<User>(`${API_URL}/me`).pipe(
      tap(user => {
        this.currentUser.set(user);
        localStorage.setItem('psy_user', JSON.stringify(user));
      })
    );
  }

  updateProfile(data: { displayName?: string; email?: string }) {
    return this.http.put(`${API_URL}/me`, data);
  }

  private handleAuth(res: AuthResponse) {
    this.token.set(res.token);
    this.currentUser.set(res.user);
    localStorage.setItem('psy_token', res.token);
    localStorage.setItem('psy_user', JSON.stringify(res.user));
  }
}
