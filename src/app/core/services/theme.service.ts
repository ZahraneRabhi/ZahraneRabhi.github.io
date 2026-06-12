import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SiteTheme = 'matrix' | 'vintage';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'zr_site_theme';

  private themeSubject = new BehaviorSubject<SiteTheme>(this.readSaved());
  readonly theme$ = this.themeSubject.asObservable();

  get current(): SiteTheme {
    return this.themeSubject.value;
  }

  toggle(): void {
    this.set(this.current === 'matrix' ? 'vintage' : 'matrix');
  }

  set(theme: SiteTheme): void {
    this.themeSubject.next(theme);
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch {}
  }

  private readSaved(): SiteTheme {
    try {
      return localStorage.getItem(this.STORAGE_KEY) === 'vintage' ? 'vintage' : 'matrix';
    } catch {
      return 'matrix';
    }
  }
}
