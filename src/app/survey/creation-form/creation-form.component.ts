import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Survey } from '../model/survey';
import { SurveyService } from '../services/survey.service';
import { UtilService } from '../../general/services/util.service';

@Component({
  selector: 'creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: [ './creation-form.component.scss' ]
})
export class CreationFormComponent implements OnInit {

  form = this.buildForm();
  survey: Survey;

  constructor(private fb: FormBuilder,
              private surveyService: SurveyService,
              private utilService: UtilService) {
  }

  ngOnInit() {
  }

  addQuestion(type: string) {
    if (type === 'textbox') {
      this.questions.push(this.fb.group({
        controlType: [ type ],
        label: [ '' ]
      }));
    } else if (type === 'dropdown') {
      this.questions.push(this.fb.group({
        controlType: [ type ],
        label: [ '' ],
        options: this.fb.array([])
      }));
    }
  }

  submitForm() {
    this.surveyService.createNewSurvey(this.form.value).subscribe(s => {
      this.utilService.openSimpleDialog('Survey created.');
      this.form.reset();
      this.form = this.buildForm();
    });
  }

  remove(index) {
    this.questions.controls.splice(index, 1);
  }

  private buildForm() {
    return this.fb.group({
      title: [ '', Validators.required ],
      description: [ '' ],
      questions: this.fb.array([])
    });
  }

  get title() {
    return this.form.get('title') as FormControl;
  }

  get questions() {
    return this.form.get('questions') as FormArray;
  }

}
