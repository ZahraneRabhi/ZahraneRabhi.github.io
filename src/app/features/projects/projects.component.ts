import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] = [
    { 
      "name": ".Net Core Clean Architecture",
      "link": "https://github.com/ZahraneRabhi/DOTNET-CORE-CLEAN-ARCHITECTURE",
      "image": "/assets/ProjectThumbnails/dotnet-clean-architecture.png",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg",
          "label": "C#"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg",
          "label": ".Net"
        },
      ]
    },
    { 
      "name": "Angular 18 Clean Architecture",
      "link": "https://github.com/ZahraneRabhi/ANGULAR-18-CLEAN-ARCHITECTURE",
      "image": "/assets/ProjectThumbnails/angular-18-clean-architecture.png",
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
      "name": "Github Scoreboard Component ",
      "link": "https://github.com/ZahraneRabhi/ng-github-stats-component",
      "image": "/assets/ProjectThumbnails/ng-gh-stats.png",

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
      "name": "Angular Laravel JWT Auth",
      "link": "https://github.com/ZahraneRabhi/laravel-angular-auth",
      "image": "/assets/ProjectThumbnails/ng-laravel-jwt.png",
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
      "name": "Angular Portfolio",
      "link": "https://github.com/ZahraneRabhi/ZahraneRabhi.github.io",
      "image": "/assets/ProjectThumbnails/angular-portfolio.png",
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
      "name": "Twitter API",
      "link": "https://github.com/ZahraneRabhi/Twitter-API",
      "image": "/assets/ProjectThumbnails/twitter-api.png",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg",
          "label": "python"
        },
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/twitter/twitter-original.svg",
          "label": "twitter"
        },
      ]
    },
    {
      "name": "ML Project template Generator",
      "link": "https://github.com/ZahraneRabhi/Python-Template-Generator",
      "image": "/assets/ProjectThumbnails/ml-template.png",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg",
          "label": "python"
        },
      ]
    },
    {
      "name": "Beautiful Terminal",
      "link": "https://github.com/ZahraneRabhi/Beautiful-Terminal-",
      "image": "/assets/ProjectThumbnails/beautiful-terminal.png",
      "stack": [
        {
          "icon": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg",
          "label": "python"
        },
      ]
    },
  ];
}
