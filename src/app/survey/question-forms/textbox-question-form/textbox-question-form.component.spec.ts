import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxQuestionFormComponent } from './textbox-question-form.component';

describe('TextboxQuestionFormComponent', () => {
  let component: TextboxQuestionFormComponent;
  let fixture: ComponentFixture<TextboxQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
