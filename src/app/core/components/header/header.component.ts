import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly linkedinUrl: string = "https://www.linkedin.com/in/zahranerabhi/";
  
  redirectToLinkedin() {
    window.location.href = this.linkedinUrl;
  }
}
