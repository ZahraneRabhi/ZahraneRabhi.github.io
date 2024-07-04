import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] = [
    {
      "name": "Github Scoreboard Component ",
      "link": "https://github.com/ZahraneRabhi/Angular-Github-Scoreboard-Component",
      "stack": [
        {
          "icon": "https://img.icons8.com/color/48/000000/angularjs.png",
          "label": "ANGULAR"
        },
        {
          "icon": "https://img.icons8.com/color/48/000000/typescript.png",
          "label": "TYPESCRIPT"
        },
        {
          "icon": "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
          "label": "TAILWIND"
        },
      ]
    },
    {
      "name": "Laravel Angular Token-Based Auth",
      "link": "https://github.com/ZahraneRabhi/laravel-angular-auth",
      "stack": [
        {
          "icon": "https://img.icons8.com/?size=100&id=UGYn5TapNioV&format=png&color=000000",
          "label": "PHP"
        },
        {      
          "icon": "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000",
          "label": "LARAVEL"
        },
        {
          "icon": "https://img.icons8.com/color/48/000000/angularjs.png",
          "label": "ANGULAR"
        },
        {
          "icon": "https://img.icons8.com/color/48/000000/typescript.png",
          "label": "TYPESCRIPT"
        },
      ]
    },
    {
      "name": "Angular Portfolio",
      "link": "https://github.com/ZahraneRabhi/ZahraneRabhi.github.io",
      "stack": [
        {
          "icon": "https://img.icons8.com/color/48/000000/angularjs.png",
          "label": "angular"
        },
        {
          "icon": "https://img.icons8.com/color/48/000000/typescript.png",
          "label": "typescript"
        },
        {
          "icon": "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
          "label": "tailwind"
        }
      ]
    },
    {
      "name": "Twitter API",
      "link": "https://github.com/ZahraneRabhi/Twitter-API",
      "stack": [
        {
          "icon": "https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000",
          "label": "python"
        },
        {
          "icon": "https://img.icons8.com/?size=100&id=xWVjuc9hryql&format=png&color=000000",
          "label": "twitter"
        },
      ]
    },
    {
      "name": "ML Notebook Template Generator",
      "link": "https://github.com/ZahraneRabhi/Python-Template-Generator",
      "stack": [
        {
          "icon": "https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000",
          "label": "python"
        },
      ]
    },
    {
      "name": "beautiful Terminal",
      "link": "https://github.com/ZahraneRabhi/Beautiful-Terminal-",
      "stack": [
        {
          "icon": "https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000",
          "label": "python"
        },
      ]
    },
  ];
}
