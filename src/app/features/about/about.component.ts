import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about_1: string = `Full Stack & Deep Learning Developer, &Occasional 3D Modeler`
  about_2: string = `I’m a Full-Stack developer by day and a Deep Learning explorer by… also day😀. I love designing & maintaining web solutions while also digging into data to find stories and trends. And when I’m not doing that, you might catch me tinkering with 3D models in Blender just for fun!`
 
  stacks: any[] = [
    {
      "icon": "https://img.icons8.com/?size=100&id=52539&format=png&color=000000",
      "label": "GIT"
    },
    {
      "icon": "https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000",
      "label": "Azure"
    },
    {
      "icon": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      "label": "PYTHON"
    },
    {
      "icon": "https://img.icons8.com/?size=100&id=O6SWwpPIM0GB&format=png&color=000000",
      "label": "PYTORCH"
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
      "icon": "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
      "label": "DOCKER"
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
      "icon": "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
      "label": "JAVA"
    },

  ];
}
