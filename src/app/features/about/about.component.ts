import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about: string = "With a background in Data Analysis, I've embarked on a new quest to sharpen my front-end skills, I am dedicated to crafting visually captivating and dynamic web applications. I believe in the idea that great design is not just about how something looks, but also about how it works and adapts to different mediums."
  stacks: any[] = [
    {
      "icon": "https://img.icons8.com/?size=100&id=52539&format=png&color=000000",
      "label": "GITHUB"
    },
    {
      "icon": "https://img.icons8.com/color/48/000000/angularjs.png",
      "label": "ANGULAR"
    },
    {      
      "icon": "https://static-00.iconduck.com/assets.00/cypress-icon-2048x2045-rgul477b.png",
      "label": "CYPRESS"
    },
    {
      "icon": "https://img.icons8.com/color/48/000000/typescript.png",
      "label": "TYPESCRIPT"
    },
    {
      "icon": "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
      "label": "TAILWIND"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      "label": "PYTHON"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000",
      "label": "PANDAS"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000",
      "label": "NUMPY"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=UGYn5TapNioV&format=png&color=000000",
      "label": "PHP"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000",
      "label": "LARAVEL"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
      "label": "JAVA"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000",
      "label": "SQL Server"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000",
      "label": "Azure"
    },

  ];
}
