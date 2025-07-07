import { Component, ElementRef, ViewChild, AfterViewChecked, NgZone, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface CommandLine {
  text: string | SafeHtml;
  isCommand: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked {
  readonly linkedinUrl: string = "https://www.linkedin.com/in/zahranerabhi/";
  
  @ViewChild('terminalOutput') terminalOutput!: ElementRef;
  @ViewChild('commandInput') commandInput!: ElementRef;
  
  commandHistory: CommandLine[] = [];
  private shouldScroll = true;
  private isUserScrolling = false;
  private scrollTimeout: any;

  constructor(
    private sanitizer: DomSanitizer, 
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}
  
  redirectToLinkedin() {
    window.location.href = this.linkedinUrl;
  }
  
  ngAfterViewChecked() {
    if (this.shouldScroll && !this.isUserScrolling) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }
  
  scrollToBottom(): void {
    try {
      // Use ngZone.runOutsideAngular to prevent triggering change detection
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.terminalOutput && this.terminalOutput.nativeElement) {
            this.terminalOutput.nativeElement.scrollTop = this.terminalOutput.nativeElement.scrollHeight;
          }
        }, 10);
      });
    } catch(err) { }
  }
  
  onTerminalScroll(): void {
    // Track when user is manually scrolling
    clearTimeout(this.scrollTimeout);
    this.isUserScrolling = true;
    
    this.scrollTimeout = setTimeout(() => {
      this.isUserScrolling = false;
    }, 1000);
  }
  
  processCommand(command: string): void {
    if (!command.trim()) return;
    
    // Add the command to history
    this.commandHistory.push({ text: command, isCommand: true });
    
    // Set flag to scroll after view update
    this.shouldScroll = true;
    
    // Process the command
    const cmd = command.toLowerCase().trim();
    
    switch(cmd) {
      case '/help':
        this.showHelp();
        break;
      case '/contact':
        this.showContact();
        break;
      case '/email':
        this.showEmail();
        break;
      case '/linkedin':
        this.showLinkedIn();
        break;
      case '/github':
        this.showGitHub();
        break;
      case '/skills':
        this.showSkills();
        break;
      case '/projects':
        this.showProjects();
        break;
      case '/joke':
        this.showJoke();
        break;
      case '/ascii':
        this.showAsciiArt();
        break;
      case '/clear':
        this.clearTerminal();
        break;
      default:
        this.commandHistory.push({ 
          text: 'Command not recognized. Type /help for available commands.', 
          isCommand: false 
        });
    }
  }
  
  showHelp(): void {
    const helpText = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mb-2">Available commands:</div>
      <div class="grid grid-cols-2 gap-2">
        <div class="text-green-400">/help</div><div>- Show available commands</div>
        <div class="text-green-400">/contact</div><div>- Display contact information</div>
        <div class="text-green-400">/email</div><div>- Show email address</div>
        <div class="text-green-400">/linkedin</div><div>- LinkedIn profile link</div>
        <div class="text-green-400">/github</div><div>- GitHub profile link</div>
        <div class="text-green-400">/skills</div><div>- List technical skills</div>
        <div class="text-green-400">/projects</div><div>- Show portfolio projects</div>
        <div class="text-green-400">/joke</div><div>- Tell a programming joke</div>
        <div class="text-green-400">/ascii</div><div>- Display ASCII art</div>
        <div class="text-green-400">/clear</div><div>- Clear terminal</div>
      </div>
    `);
    this.commandHistory.push({ text: helpText, isCommand: false });
  }
  
  showContact(): void {
    const contactText = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mb-2">Contact Information:</div>
      <div>Email: <a href="mailto:ZahraneRabhi@outlook.com" class="text-green-400 hover:underline">ZahraneRabhi@outlook.com</a></div>
      <div>LinkedIn: <a href="https://linkedin.com/in/zahranerabhi" target="_blank" class="text-green-400 hover:underline">linkedin.com/in/zahranerabhi</a></div>
      <div>GitHub: <a href="https://github.com/ZahraneRabhi" target="_blank" class="text-green-400 hover:underline">github.com/ZahraneRabhi</a></div>
    `);
    this.commandHistory.push({ text: contactText, isCommand: false });
  }
  
  showEmail(): void {
    this.commandHistory.push({ 
      text: 'Email: <a href="mailto:ZahraneRabhi@outlook.com" class="text-green-400 hover:underline">ZahraneRabhi@outlook.com</a>', 
      isCommand: false 
    });
  }
  
  showLinkedIn(): void {
    this.commandHistory.push({ 
      text: 'LinkedIn: <a href="https://linkedin.com/in/zahranerabhi" target="_blank" class="text-green-400 hover:underline">linkedin.com/in/zahranerabhi</a>', 
      isCommand: false 
    });
  }
  
  showGitHub(): void {
    this.commandHistory.push({ 
      text: 'GitHub: <a href="https://github.com/ZahraneRabhi" target="_blank" class="text-green-400 hover:underline">github.com/ZahraneRabhi</a>', 
      isCommand: false 
    });
  }
  
  showSkills(): void {
    const skillsText = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mb-2">Technical Skills:</div>
      <div class="grid grid-cols-2 gap-1">
        <div class="text-green-400">Frontend:</div><div>Angular, React, TailwindCSS, TypeScript, JavaScript</div>
        <div class="text-green-400">Backend:</div><div>Python, C# </div>
        <div class="text-green-400">Data Science:</div><div>Python, TensorFlow, Pandas, Scikit-learn</div>
        <div class="text-green-400">Databases:</div><div>SQL Server</div>
        <div class="text-green-400">DevOps:</div><div>Docker, CI/CD, Azure, Git</div>
      </div>
    `);
    this.commandHistory.push({ text: skillsText, isCommand: false });
  }
  
  showProjects(): void {
    const projectsText = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mb-2">Portfolio Projects:</div>
      <div class="grid grid-cols-1 gap-2">
        <div><span class="text-green-400">Angular 18 Clean Architecture</span> - Modern web application using clean architecture principles</div>
        <div><span class="text-green-400">.NET Clean Architecture</span> - Enterprise application with domain-driven design</div>
        <div><span class="text-green-400">NG-Laravel JWT</span> - Authentication system with Angular and Laravel</div>
        <div><span class="text-green-400">ML Template</span> - Reusable machine learning project structure</div>
        <div><span class="text-green-400">Twitter API Integration</span> - Social media data analytics platform</div>
        <div><span class="text-green-400">NG-GH-Stats</span> - GitHub statistics visualization tool</div>
      </div>
    `);
    this.commandHistory.push({ text: projectsText, isCommand: false });
  }
  
  showJoke(): void {
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      "How many programmers does it take to change a light bulb? None, it's a hardware problem!",
      "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
      "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
      "Why did the developer go broke? Because he used up all his cache!",
      "What's the object-oriented way to become wealthy? Inheritance!",
      "Why do Java developers wear glasses? Because they can't C#!",
      "What do you call a programmer from Finland? Nerdic!",
      "How many programmers does it take to screw in a lightbulb? None. It's a hardware problem!",
      "Why was the function sad after a party? It didn't get called!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    this.commandHistory.push({ text: randomJoke, isCommand: false });
  }
  
  showAsciiArt(): void {
    const asciiOptions = [
      // Matrix-themed ASCII
      `
<pre class="text-green-400">
  ███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗
  ████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝
  ██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝ 
  ██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗ 
  ██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝ ██╗
  ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
</pre>`,
      // Cyberpunk-themed ASCII
      `
<pre class="text-green-400">
   ______     __  __     ______     ______     ______    
  /\\  ___\\   /\\ \\_\\ \\   /\\  == \\   /\\  ___\\   /\\  == \\   
  \\ \\ \\____  \\ \\____ \\  \\ \\  __<   \\ \\  __\\   \\ \\  __<   
   \\ \\_____\\  \\/\\_____\\  \\ \\_____\\  \\ \\_______\\ \\_\\ \\_\\ 
    \\/_____/   \\/_____/   \\/_____/   \\/_______/\\/_/ /_/ 
</pre>`,
      
    ];
    const randomAscii = asciiOptions[Math.floor(Math.random() * asciiOptions.length)];
    this.commandHistory.push({ 
      text: this.sanitizer.bypassSecurityTrustHtml(randomAscii), 
      isCommand: false 
    });
  }
  
  clearTerminal(): void {
    this.ngZone.run(() => {
      this.commandHistory = [];
      this.commandHistory.push({ 
        text: 'Terminal cleared. Type /help for available commands.', 
        isCommand: false 
      });
      this.shouldScroll = true;
      this.cdr.detectChanges();
    });
  }
}
