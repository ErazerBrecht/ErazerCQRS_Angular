import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupMarkdownComponent } from './form-group-markdown.component';

describe('FormGroupMarkdownComponent', () => {
  let component: FormGroupMarkdownComponent;
  let fixture: ComponentFixture<FormGroupMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
