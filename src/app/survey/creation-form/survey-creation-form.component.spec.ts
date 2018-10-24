import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCreationFormComponent } from './survey-creation-form.component';

describe('SurveyCreationFormComponent', () => {
  let component: SurveyCreationFormComponent;
  let fixture: ComponentFixture<SurveyCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCreationFormComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
