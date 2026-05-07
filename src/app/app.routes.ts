import { Routes } from '@angular/router';
import { authGuard, adminGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', title: 'PsyLearn - Home', loadComponent: () => import('./pages/home/home').then(m => m.HomePage) },
  { path: 'login', title: 'PsyLearn - Login', loadComponent: () => import('./pages/login/login').then(m => m.LoginPage) },
  { path: 'register', title: 'PsyLearn - Register', loadComponent: () => import('./pages/register/register').then(m => m.RegisterPage) },
  { path: 'forgot-password', title: 'PsyLearn - Forgot Password', loadComponent: () => import('./pages/forgot-password/forgot-password').then(m => m.ForgotPasswordPage) },
  { path: 'chapters', title: 'PsyLearn - Chapters', loadComponent: () => import('./pages/chapters/chapters').then(m => m.ChaptersPage) },
  { path: 'chapters/:id', title: 'PsyLearn - Chapter', loadComponent: () => import('./pages/chapter-detail/chapter-detail').then(m => m.ChapterDetailPage) },
  { path: 'quiz/:chapterId', title: 'PsyLearn - Quiz', loadComponent: () => import('./pages/quiz/quiz').then(m => m.QuizPage), canActivate: [authGuard] },
  { path: 'memory-game', title: 'PsyLearn - Memory Game', loadComponent: () => import('./pages/memory-game/memory-game').then(m => m.MemoryGamePage), canActivate: [authGuard] },
  { path: 'facts', title: 'PsyLearn - Facts', loadComponent: () => import('./pages/facts/facts').then(m => m.FactsPage) },
  { path: 'psychologists', title: 'PsyLearn - Psychologists', loadComponent: () => import('./pages/psychologists/psychologists').then(m => m.PsychologistsPage) },
  { path: 'stories', title: 'PsyLearn - Stories', loadComponent: () => import('./pages/stories/stories').then(m => m.StoriesPage) },
  { path: 'notes', title: 'PsyLearn - Notes', loadComponent: () => import('./pages/notes/notes').then(m => m.NotesPage), canActivate: [authGuard] },
  { path: 'profile', title: 'PsyLearn - Profile', loadComponent: () => import('./pages/profile/profile').then(m => m.ProfilePage), canActivate: [authGuard] },
  { path: 'contact', title: 'PsyLearn - Contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactPage) },
  { path: 'faq', title: 'PsyLearn - FAQ', loadComponent: () => import('./pages/faq/faq').then(m => m.FaqPage) },
  { path: 'dashboard', title: 'PsyLearn - Dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardPage), canActivate: [authGuard] },
  { path: 'achievements', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'flashcards', title: 'PsyLearn - Flashcards', loadComponent: () => import('./pages/flashcards/flashcards').then(m => m.FlashcardsPage), canActivate: [authGuard] },
  { path: 'flashcards/:chapterId', title: 'PsyLearn - Flashcards', loadComponent: () => import('./pages/flashcards/flashcards').then(m => m.FlashcardsPage), canActivate: [authGuard] },
  { path: 'glossary', title: 'PsyLearn - Glossary', loadComponent: () => import('./pages/glossary/glossary').then(m => m.GlossaryPage) },
  { path: 'midterm', title: 'PsyLearn - Midterm Practice', loadComponent: () => import('./pages/midterm/midterm').then(m => m.MidtermPage) },
  { path: 'admin', title: 'PsyLearn - Admin', loadComponent: () => import('./pages/admin/admin').then(m => m.AdminPage), canActivate: [authGuard, adminGuard] },
];
