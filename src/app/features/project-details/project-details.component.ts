import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../core/models/Project';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  activeScreenshotIndex = 0;
  loading = true;
  error = false;

  get hasScreenshots(): boolean {
    return !!this.project?.screenshots?.length;
  }

  get hasMultipleScreenshots(): boolean {
    return (this.project?.screenshots?.length ?? 0) > 1;
  }

  get currentScreenshot(): string | undefined {
    return this.project?.screenshots?.[this.activeScreenshotIndex];
  }
  
  // Projects data (would normally come from a service)
  projects = [
    { 
      "id": "dotnet-clean-architecture",
      "name": ".Net Core Clean Architecture",
      "description": "A comprehensive implementation of Clean Architecture principles in a .NET Core application, featuring CQRS, MediatR, and Domain-Driven Design.",
      "longDescription": "This project demonstrates the implementation of Clean Architecture in a .NET Core application, focusing on separation of concerns and maintainability. It incorporates CQRS (Command Query Responsibility Segregation) pattern using MediatR library and implements Domain-Driven Design principles. The architecture is divided into distinct layers: Domain, Application, Infrastructure, and Presentation, each with clear responsibilities and dependencies.",
      "link": "https://github.com/ZahraneRabhi/DOTNET-CORE-CLEAN-ARCHITECTURE",
      "githubLink": "https://github.com/ZahraneRabhi/DOTNET-CORE-CLEAN-ARCHITECTURE",
      "image": "/assets/ProjectThumbnails/dotnet-clean-architecture.png",
      "features": [
        "Clean Architecture implementation with distinct layers",
        "CQRS pattern with MediatR",
        "Domain-Driven Design principles",
        "Entity Framework Core for data access",
        "Dependency Injection",
        "Unit and Integration testing"
      ],
      "screenshots": [
        "/assets/ProjectThumbnails/dotnet-clean-architecture.png"
      ],
      "releaseDate": "2024-03-15",
      "category": "Backend",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg",
          "label": "C#"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg",
          "label": ".Net"
        }
      ]
    },
    { 
      "id": "angular-18-clean-architecture",
      "name": "Angular 18 Clean Architecture",
      "description": "A modern Angular 18 application structured with clean architecture principles, featuring state management, lazy-loaded modules, and comprehensive testing.",
      "longDescription": "This project showcases the implementation of clean architecture principles in an Angular 18 application. It demonstrates how to structure a scalable, maintainable frontend application with proper separation of concerns. The application features state management with NgRx, lazy-loaded modules for improved performance, and comprehensive testing for all components and services.",
      "link": "https://github.com/ZahraneRabhi/ANGULAR-18-CLEAN-ARCHITECTURE",
      "githubLink": "https://github.com/ZahraneRabhi/ANGULAR-18-CLEAN-ARCHITECTURE",
      "image": "/assets/ProjectThumbnails/angular-18-clean-architecture.png",
      "features": [
        "Clean Architecture implementation in Angular 18",
        "State management with NgRx",
        "Lazy-loaded feature modules",
        "Comprehensive component and service testing",
        "Responsive design with Tailwind CSS",
        "TypeScript best practices"
      ],
      "screenshots": [
        "/assets/ProjectThumbnails/angular-18-clean-architecture.png"
      ],
      "releaseDate": "2024-05-20",
      "category": "Frontend",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg",
          "label": "Angular"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg",
          "label": "Tailwind"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg",
          "label": "TypeScript"
        }
      ]
    },
    {
      "id": "ng-github-stats",
      "name": "Github Scoreboard Component",
      "description": "A reusable Angular component that visualizes GitHub statistics and activities in a Matrix-themed interface, perfect for developer portfolios.",
      "longDescription": "This project provides a customizable GitHub statistics component for Angular applications. It fetches and visualizes a developer's GitHub activities including repositories, commits, stars, and contributions. The component features a Matrix-inspired design that can be integrated into any developer portfolio or personal website. It offers various configuration options and responsive design for all devices.",
      "link": "https://github.com/ZahraneRabhi/ng-github-stats-component",
      "githubLink": "https://github.com/ZahraneRabhi/ng-github-stats-component",
      "image": "/assets/ProjectThumbnails/ng-gh-stats.png",
      "features": [
        "GitHub API integration",
        "Customizable statistics display",
        "Matrix-themed visualization",
        "Responsive design",
        "Easy integration into Angular applications",
        "Configurable appearance and metrics"
      ],
      "screenshots": [
        "/assets/ProjectThumbnails/ng-gh-stats.png"
      ],
      "releaseDate": "2024-04-10",
      "category": "Component",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg",
          "label": "Angular"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg",
          "label": "Tailwind"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg",
          "label": "TypeScript"
        }
      ]
    },
    {
      "id": "angular-laravel-jwt",
      "name": "Angular Laravel JWT Auth",
      "description": "A full-stack authentication system using Angular, Laravel, and JWT (JSON Web Tokens) for secure, token-based user authentication.",
      "longDescription": "This project implements a robust authentication system using Angular for the frontend and Laravel for the backend API. It utilizes JSON Web Tokens (JWT) for secure, stateless authentication between the client and server. The system includes features like user registration, login, token refresh, password reset, and profile management. The implementation follows best practices for security and user experience.",
      "link": "https://github.com/ZahraneRabhi/laravel-angular-auth",
      "githubLink": "https://github.com/ZahraneRabhi/laravel-angular-auth",
      "image": "/assets/ProjectThumbnails/ng-laravel-jwt.png",
      "features": [
        "JWT-based authentication",
        "User registration and login",
        "Password reset functionality",
        "Token refresh mechanism",
        "Role-based authorization",
        "User profile management",
        "Security best practices"
      ],
      "screenshots": [
        "/assets/ProjectThumbnails/ng-laravel-jwt.png"
      ],
      "releaseDate": "2024-02-18",
      "category": "Full-stack",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/php/php-original.svg",
          "label": "PHP"
        },
        {      
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/laravel/laravel-original.svg",
          "label": "LARAVEL"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg",
          "label": "Angular"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg",
          "label": "TypeScript"
        }
      ]
    },
    {
      "id": "angular-portfolio",
      "name": "Angular Portfolio",
      "description": "A dynamic, Matrix-themed portfolio website built with Angular and Tailwind CSS, featuring interactive components and responsive design.",
      "longDescription": "This project is a personal portfolio website built with Angular and styled with Tailwind CSS. It features a unique Matrix-inspired theme with interactive elements like terminal commands, animations, and particle effects. The portfolio showcases projects, skills, and contact information in an engaging, responsive design that works seamlessly across all devices. The code is structured for maintainability and performance.",
      "link": "https://github.com/ZahraneRabhi/ZahraneRabhi.github.io",
      "githubLink": "https://github.com/ZahraneRabhi/ZahraneRabhi.github.io",
      "liveDemo": "https://zahranerabhi.github.io/",
      "image": "/assets/ProjectThumbnails/angular-portfolio.png",
      "features": [
        "Matrix-inspired theme and animations",
        "Interactive terminal commands",
        "Responsive design for all devices",
        "Project showcase with detailed views",
        "GitHub integration for live statistics",
        "Optimized performance and loading times",
        "Dark mode support"
      ],
      "screenshots": [
        "/assets/ProjectThumbnails/angular-portfolio.png"
      ],
      "releaseDate": "2024-06-01",
      "category": "Frontend",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg",
          "label": "Angular"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg",
          "label": "Tailwind"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg",
          "label": "TypeScript"
        }
      ]
    }
  ];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (!projectId) {
        this.router.navigate(['/']);
        return;
      }
      
      this.project = this.projects.find(p => p.id === projectId);
      
      if (!this.project) {
        this.error = true;
      }
      
      this.loading = false;
    });
  }
  
  getSanitizedHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
  
  goToNextScreenshot(): void {
    if (this.project?.screenshots && this.project.screenshots.length > 0) {
      this.activeScreenshotIndex = (this.activeScreenshotIndex + 1) % this.project.screenshots.length;
    }
  }
  
  goToPreviousScreenshot(): void {
    if (this.project?.screenshots && this.project.screenshots.length > 0) {
      this.activeScreenshotIndex = (this.activeScreenshotIndex - 1 + this.project.screenshots.length) % this.project.screenshots.length;
    }
  }
  
  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
  
  goBack(): void {
    this.router.navigate(['/']);
  }
}
