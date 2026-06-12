import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-matrix-rain',
  template: `
    <style>
      :host {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        background: black;
        overflow: hidden;
      }
      canvas {
        display: block;
        width: 100%;
        height: 100%;
      }
    </style>
    <canvas #canvas></canvas>
  `,
})
export class MatrixRainComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private fontSize = 16;
  private columns = 0;
  private drops: number[] = [];

  private characters = 'アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  private isVisible = true;

  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    this.columns = this.canvasRef.nativeElement.width / this.fontSize;
    this.drops = Array.from({ length: this.columns }, () => Math.floor(Math.random() * -100));

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = this.isVisible;
        this.isVisible = entry.isIntersecting;
        if (this.isVisible && !wasVisible) {
          this.draw();
        }
      },
      { threshold: 0 }
    );
    observer.observe(this.canvasRef.nativeElement);

    this.draw();
  }
  
  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = 1920;
    canvas.height = 1080;
    this.columns = canvas.width / this.fontSize;
    this.drops = Array.from({ length: this.columns }, () => Math.floor(Math.random() * -100));
  }

  private draw() {
    if (!this.isVisible) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillStyle = '#0F0';
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.characters[Math.floor(Math.random() * this.characters.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;
      this.ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }

    setTimeout(() => requestAnimationFrame(() => this.draw()), 24);
  }
}
