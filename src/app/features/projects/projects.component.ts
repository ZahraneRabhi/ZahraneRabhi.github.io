import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  navigateToProjectDetails(projectId: string) {
    this.router.navigate(['/project', projectId]);
  }

  projects: any[] = [
    {
      id: 'Wakalny',
      name: 'Wakalny',
      link: 'https://github.com/ZahraneRabhi/Restaurant.Backend',
      image: '/assets/projects/Wakalny/thumbnail.png',
      description:
        'Clean architecture ASP.NET Core backend for restaurant management: Sentinemtn Analysis, Frequent Items Analysis, auth, menus, orders, reviews',
      longDescription:
        'This is a modular, scalable backend system for a restaurant management application. It is built using ASP.NET Core and follows a clean architecture approach, separating concerns into Domain, Application, Infrastructure, Persistence, and API layers. The system supports user authentication, menu management, order processing, reviews, and more.',
      features: [
        'Clean Architecture implementation with distinct layers',
        'CQRS pattern with MediatR',
        'Domain-Driven Design principles',
        'Entity Framework Core for data access',
        'Dependency Injection',
        'Unit and Integration testing',
      ],
      screenshots: [
        '/assets/projects/Wakalny/screenshots/home.png',
        '/assets/projects/Wakalny/screenshots/auth.png',
        '/assets/projects/Wakalny/screenshots/menu.png',
        '/assets/projects/Wakalny/screenshots/profile.png',
        '/assets/projects/Wakalny/screenshots/admin.png',
      ],
      githubLink: 'https://github.com/ZahraneRabhi/Restaurant.Backend',
      liveDemo: null,
      releaseDate: '2025-05-30',
      category: 'Backend, Frontend, Data Mining, Deep Learning',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg',
          label: 'C#',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg',
          label: '.Net',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
          label: 'Angular',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
          label: 'Tailwind',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
          label: 'TypeScript',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
          label: 'Python',
        },
        {
          icon: 'https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000',
          label: 'PANDAS',
        },
        {
          icon: 'https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000',
          label: 'SQL Server',
        },
        {
          icon: 'https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000',
          label: 'TENSORFLOW',
        },
      ],
    },
    {
      id: 'Wasalny',
      name: 'Wasalny',
      link: 'https://github.com/ZahraneRabhi/Restaurant.Backend',
      image: '/assets/projects/Wasalny/thumbnail.png',
      description:
        'Clean architecture ASP.NET Core & Angular app for Carpooling management:  Auth, Driver maganement, Passenger Management, Creating Trips, Ordering Trips, Trip Preferences, etc.',
      longDescription:
        'TThis is a modular, scalable web app for a carpooling management system, meticulously designed using Clean Architecture principles and built with ASP.NET Core and Angular. It provides a robust foundation for organizing and coordinating shared rides between drivers and passengers.',
      features: [
        'Clean Architecture implementation with distinct layers',
        'Repository pattern &  Clean Architecture',
        'Domain-Driven Design principles',
        'Entity Framework Core for data access',
        'Dependency Injection',
      ],
      screenshots: [
        '/assets/projects/Wasalny/screenshots/home.png',
        '/assets/projects/Wasalny/screenshots/register.png',
        '/assets/projects/Wasalny/screenshots/catalog.png',
        '/assets/projects/Wasalny/screenshots/driver-dashboard.png',
        '/assets/projects/Wasalny/screenshots/create-trip.png',
        '/assets/projects/Wasalny/screenshots/create-vehicle.png',
        '/assets/projects/Wasalny/screenshots/admin.png',
      ],
      githubLink: 'https://github.com/ZahraneRabhi/Restaurant.Backend',
      liveDemo: null,
      releaseDate: '2025-05-30',
      category: 'Backend, Frontend, Data Mining, Deep Learning',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg',
          label: 'C#',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg',
          label: '.Net',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
          label: 'Angular',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
          label: 'Tailwind',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
          label: 'TypeScript',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
          label: 'Python',
        },
        {
          icon: 'https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000',
          label: 'PANDAS',
        },
        {
          icon: 'https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000',
          label: 'SQL Server',
        },
        {
          icon: 'https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000',
          label: 'TENSORFLOW',
        },
      ],
    },
    {
      id: 'angular-portfolio',
      name: 'Angular Portfolio',
      link: 'https://github.com/ZahraneRabhi/ZahraneRabhi.github.io',
      image: '/assets/projects/matrix-portfolio/thumbnail.png',
      description: 'Dynamic Matrix-themed portfolio website',
      longDescription:
        'This project is a personal portfolio website built with Angular and styled with Tailwind CSS. It features a unique Matrix-inspired theme with interactive elements like terminal commands, animations, and particle effects. The portfolio showcases projects, skills, and contact information in an engaging, responsive design.',
      features: [
        'Matrix-inspired theme and animations',
        'Interactive terminal commands',
        'Responsive design for all devices',
        'Project showcase with detailed views',
        'GitHub integration for live statistics',
        'Optimized performance and loading times',
        'Dark mode support',
      ],
      screenshots: [
        '/assets/projects/matrix-portfolio/screenshots/header.png',
        '/assets/projects/matrix-portfolio/screenshots/about.png',
      ],
      githubLink: 'https://github.com/ZahraneRabhi/ZahraneRabhi.github.io',
      liveDemo: 'https://zahranerabhi.github.io/',
      releaseDate: '2024-06-01',
      category: ['Frontend'],
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
          label: 'Angular',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
          label: 'Tailwind',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
          label: 'TypeScript',
        },
      ],
    },
    {
      id: 'ng-github-stats',
      name: 'Github Scoreboard Component',
      link: 'https://github.com/ZahraneRabhi/ng-github-stats-component',
      image: '/assets/projects/ng-github-stats/thumbnail.png',
      description:
        'Reusable Angular component for GitHub statistics visualization',
      longDescription:
        "This project provides a customizable GitHub statistics component for Angular applications. It fetches and visualizes a developer's GitHub activities including repositories, commits, stars, and contributions with a Matrix-inspired design.",
      features: [
        'GitHub API integration',
        'Customizable statistics display',
        'Matrix-themed visualization',
        'Responsive design',
        'Easy integration into Angular applications',
        'Configurable appearance and metrics',
      ],
      screenshots: ['/assets/ProjectThumbnails/ng-gh-stats.png'],
      githubLink: 'https://github.com/ZahraneRabhi/ng-github-stats-component',
      liveDemo: null,
      releaseDate: '2024-04-10',
      category: 'Component',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
          label: 'Angular',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
          label: 'Tailwind',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
          label: 'TypeScript',
        },
      ],
    },
    {
      id: 'dotnet-clean-architecture',
      name: '.Net Core Clean Architecture',
      link: 'https://github.com/ZahraneRabhi/DOTNET-CORE-CLEAN-ARCHITECTURE',
      image: '/assets/ProjectThumbnails/dotnet-clean-architecture.png',
      description:
        'A comprehensive implementation of Clean Architecture principles in .NET Core',
      longDescription:
        'This project demonstrates the implementation of Clean Architecture in a .NET Core application, featuring CQRS, MediatR, and Domain-Driven Design principles. The architecture is divided into distinct layers with clear responsibilities and dependencies.',
      features: [
        'Clean Architecture implementation with distinct layers',
        'CQRS pattern with MediatR',
        'Domain-Driven Design principles',
        'Entity Framework Core for data access',
        'Dependency Injection',
        'Unit and Integration testing',
      ],
      screenshots: null,
      githubLink:
        'https://github.com/ZahraneRabhi/DOTNET-CORE-CLEAN-ARCHITECTURE',
      liveDemo: null,
      releaseDate: '2024-03-15',
      category: 'Backend',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg',
          label: 'C#',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg',
          label: '.Net',
        },
      ],
    },
    {
      id: 'angular-18-clean-architecture',
      name: 'Angular 18 Clean Architecture',
      link: 'https://github.com/ZahraneRabhi/ANGULAR-18-CLEAN-ARCHITECTURE',
      image: '/assets/ProjectThumbnails/angular-18-clean-architecture.png',
      description:
        'Modern Angular 18 application with clean architecture principles',
      longDescription:
        'This project showcases the implementation of clean architecture principles in an Angular 18 application. It demonstrates how to structure a scalable, maintainable frontend application with proper separation of concerns, state management, and comprehensive testing.',
      features: [
        'Clean Architecture implementation in Angular 18',
        'State management with NgRx',
        'Lazy-loaded feature modules',
        'Comprehensive component and service testing',
        'Responsive design with Tailwind CSS',
        'TypeScript best practices',
      ],
      screenshots: [
        '/assets/ProjectThumbnails/angular-18-clean-architecture.png',
      ],
      githubLink:
        'https://github.com/ZahraneRabhi/ANGULAR-18-CLEAN-ARCHITECTURE',
      liveDemo: null,
      releaseDate: '2024-05-20',
      category: 'Frontend',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
          label: 'Angular',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
          label: 'Tailwind',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
          label: 'TypeScript',
        },
      ],
    },
    {
      id: 'angular-laravel-jwt',
      name: 'Angular Laravel JWT Auth',
      link: 'https://github.com/ZahraneRabhi/laravel-angular-auth',
      image: '/assets/ProjectThumbnails/ng-laravel-jwt.png',
      description: 'Full-stack authentication system with Angular and Laravel',
      longDescription:
        'This project implements a robust authentication system using Angular for the frontend and Laravel for the backend API. It utilizes JSON Web Tokens (JWT) for secure, stateless authentication with features like user registration, login, token refresh, and profile management.',
      features: [
        'JWT-based authentication',
        'User registration and login',
        'Password reset functionality',
        'Token refresh mechanism',
        'Role-based authorization',
        'User profile management',
        'Security best practices',
      ],
      screenshots: ['/assets/ProjectThumbnails/ng-laravel-jwt.png'],
      githubLink: 'https://github.com/ZahraneRabhi/laravel-angular-auth',
      liveDemo: null,
      releaseDate: '2024-02-18',
      category: 'Full-stack',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/php/php-original.svg',
          label: 'PHP',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/laravel/laravel-original.svg',
          label: 'LARAVEL',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg',
          label: 'Angular',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
          label: 'TypeScript',
        },
      ],
    },
    {
      id: 'twitter-api',
      name: 'Twitter API',
      link: 'https://github.com/ZahraneRabhi/Twitter-API',
      image: '/assets/ProjectThumbnails/twitter-api.png',
      description: 'Python-based Twitter API integration and data analytics',
      longDescription:
        'This project provides a comprehensive Twitter API integration using Python. It includes features for data collection, analysis, and visualization of Twitter data, with support for real-time streaming and batch processing of tweets.',
      features: [
        'Twitter API v2 integration',
        'Real-time tweet streaming',
        'Sentiment analysis',
        'Data visualization',
        'Batch processing capabilities',
        'Rate limiting handling',
      ],
      screenshots: ['/assets/ProjectThumbnails/twitter-api.png'],
      githubLink: 'https://github.com/ZahraneRabhi/Twitter-API',
      liveDemo: null,
      releaseDate: '2024-01-25',
      category: 'Data Analytics',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
          label: 'python',
        },
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/twitter/twitter-original.svg',
          label: 'twitter',
        },
      ],
    },
    {
      id: 'ml-template',
      name: 'ML Project template Generator',
      link: 'https://github.com/ZahraneRabhi/Python-Template-Generator',
      image: '/assets/ProjectThumbnails/ml-template.png',
      description: 'Automated machine learning project structure generator',
      longDescription:
        'This project provides an automated way to generate machine learning project structures with best practices. It includes templates for data science workflows, model training pipelines, and deployment configurations.',
      features: [
        'Automated project structure generation',
        'ML pipeline templates',
        'Data science best practices',
        'Configurable project types',
        'Docker integration',
        'CI/CD pipeline templates',
      ],
      screenshots: ['/assets/ProjectThumbnails/ml-template.png'],
      githubLink: 'https://github.com/ZahraneRabhi/Python-Template-Generator',
      liveDemo: null,
      releaseDate: '2024-03-08',
      category: 'Tools',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
          label: 'python',
        },
      ],
    },
    {
      id: 'beautiful-terminal',
      name: 'Beautiful Terminal',
      link: 'https://github.com/ZahraneRabhi/Beautiful-Terminal-',
      image: '/assets/ProjectThumbnails/beautiful-terminal.png',
      description:
        'Enhanced terminal experience with beautiful themes and features',
      longDescription:
        'This project enhances the terminal experience with beautiful themes, custom prompts, and productivity features. It includes color schemes, status information, and customizable elements to make the command line more visually appealing and functional.',
      features: [
        'Custom terminal themes',
        'Enhanced prompt design',
        'Git integration',
        'Status indicators',
        'Performance optimizations',
        'Cross-platform compatibility',
      ],
      screenshots: ['/assets/ProjectThumbnails/beautiful-terminal.png'],
      githubLink: 'https://github.com/ZahraneRabhi/Beautiful-Terminal-',
      liveDemo: null,
      releaseDate: '2024-01-10',
      category: 'Tools',
      stack: [
        {
          icon: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg',
          label: 'python',
        },
      ],
    },
  ];
}
