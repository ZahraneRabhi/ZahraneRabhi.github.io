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
      "icon": "https://img.icons8.com/color/48/000000/typescript.png",
      "label": "TYPESCRIPT"
    },
    {
      "icon": "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      "label": "TAILWIND CSS"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      "label": "PYTHON"
    },
    {      
      "icon": "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000",
      "label": "TENSORFLOW"
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
      "icon": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      "label": "SCIKIT-LEARN"
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
    {      
      "icon": "https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000",
      "label": "AWS"
    },
  ];
}
