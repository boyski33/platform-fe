import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../model/question';
import { Survey } from '../model/survey';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: [ './creation-form.component.scss' ]
})
export class CreationFormComponent implements OnInit {

  form = this._buildForm();
  survey: Survey;

  constructor(private fb: FormBuilder,
              private _surveyService: SurveyService) {
  }

  ngOnInit() {
  }

  addQuestion(type: string) {
    if (type === 'textbox') {
      this.questions.push(this.fb.group({
        controlType: type,
        order: this.questions.length,
        label: ''
      }));
    }
  }

  submitForm() {
    this._surveyService.createNewSurvey(this.form.value).subscribe(s => {
      alert('Created');
      this.form.reset();
      this.form = this._buildForm();
    });
  }

  remove(index) {
    this.questions.controls.splice(index, 1);
  }

  private _buildForm() {
    return this.fb.group({
      title: [ '', Validators.required ],
      description: [ '' ],
      questions: this.fb.array([])
    });
  }

  get questions() {
    return this.form.get('questions') as FormArray;
  }

}
