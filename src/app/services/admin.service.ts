import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AdminUser {
  id: number;
  email: string;
  username: string;
  displayName: string;
  role: string;
  subscriptionStatus: string;
  trialStartDate: string;
  createdAt: string;
  lastLogin: string | null;
}

export interface AdminStats {
  totalUsers: number;
  trialUsers: number;
  activeUsers: number;
  totalQuizzes: number;
  totalNotes: number;
}

const API = 'http://localhost:3000/api/admin';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);

  getUsers() {
    return this.http.get<AdminUser[]>(`${API}/users`);
  }

  getStats() {
    return this.http.get<AdminStats>(`${API}/stats`);
  }

  updateSubscription(userId: number, status: string) {
    return this.http.put(`${API}/users/${userId}/subscription`, { status });
  }

  deleteUser(userId: number) {
    return this.http.delete(`${API}/users/${userId}`);
  }
}
