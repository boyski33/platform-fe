import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownQuestionFormComponent } from './dropdown-question-form.component';

describe('DropdownQuestionFormComponent', () => {
  let component: DropdownQuestionFormComponent;
  let fixture: ComponentFixture<DropdownQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
