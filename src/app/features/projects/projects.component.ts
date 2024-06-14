import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] = [
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
      "name": "Project Template Generator",
      "link": "https://github.com/ZahraneRabhi/Python-Template-Generator",
      "stack": [
        {
          "icon": "https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000",
          "label": "python"
        },
      ]
    },
  ];
}
