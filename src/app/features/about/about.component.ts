import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about_1: string = `Web Developer, Data Science Enthusiast, & Occasional 3D Modeler`
  about_2: string = `I’m a web developer by day and a data explorer by… also day😀. I love crafting smooth, responsive websites and digging into data to find stories and trends. And when I’m not doing that, you might catch me tinkering with 3D models just for fun!`
 
  stacks: any[] = [
    {
      "icon": "https://img.icons8.com/?size=100&id=52539&format=png&color=000000",
      "label": "GITHUB"
    },
    {
      "icon": "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000",
      "label": ".NET CORE"
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
      "icon": "https://logosdownload.com/logo/scikit-learn-logo-big.png",
      "label": "SCIKIT-LEARN"
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
