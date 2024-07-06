import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentComponent } from './blog-content.component';

describe('BlogContentComponent', () => {
  let component: BlogContentComponent;
  let fixture: ComponentFixture<BlogContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogContentComponent]
    });
    fixture = TestBed.createComponent(BlogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
