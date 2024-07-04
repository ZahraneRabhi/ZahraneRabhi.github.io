import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about_1: string = `With a solid background in Data Science, I've mastered cleaning and getting useful insights from complex datasets using Python, My expertise in statistical techniques and data visualization allows me to transform raw data into actionable intelligence ready to be fed to a ML model.`
  about_2: string = `Now, I'm dedicated to sharpening my front-end skills to create visually captivating and dynamic web applications. I believe great design is about both aesthetics and functionality. My goal is to merge my analytical abilities with front-end technologies to build seamless, intuitive, and responsive user experiences.`
 
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
