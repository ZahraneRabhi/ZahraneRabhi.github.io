import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  isMenuOpen = false;
  isScrolled = false;

  navLinks = [
    { id: 'about', label: 'about' },
    { id: 'projects', label: 'projects' },
    { id: 'stats', label: 'stats' },
    { id: 'contact', label: 'contact' },
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 80;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  async scrollTo(sectionId: string) {
    if (this.router.url !== '/') {
      await this.router.navigate(['/']);
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    this.closeMenu();
  }
}
