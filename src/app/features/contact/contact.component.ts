import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  sending = false;
  sent = false;
  sendError = false;

  // Replace with your EmailJS credentials from https://www.emailjs.com
  private readonly SERVICE_ID = 'YOUR_SERVICE_ID';
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async send(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending = true;
    this.sendError = false;
    this.sent = false;
    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: this.form.value.name,
          from_email: this.form.value.email,
          message: this.form.value.message,
        },
        this.PUBLIC_KEY
      );
      this.sent = true;
      this.form.reset();
    } catch {
      this.sendError = true;
    } finally {
      this.sending = false;
    }
  }
}
