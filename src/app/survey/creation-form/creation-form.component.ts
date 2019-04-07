import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Survey } from '../model/survey';
import { SurveyService } from '../services/survey.service';
import { UtilService } from '../../general/services/util.service';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: [ './creation-form.component.scss' ]
})
export class CreationFormComponent implements OnInit {

  form = this.buildForm();
  survey: Survey;
  addIcon = faPlus;
  submitIcon = faCheck;

  constructor(private fb: FormBuilder,
              private surveyService: SurveyService,
              private utilService: UtilService) {
  }

  ngOnInit() {
  }

  addQuestion(type: string) {
    switch (type) {
      case 'textbox': {
        this.questions.push(this.fb.group({
          controlType: [ type ],
          label: [ '' ]
        }));

        break;
      }
      case 'dropdown':
      case 'radio': {
        this.questions.push(this.fb.group({
          controlType: [ type ],
          label: [ '' ],
          options: this.fb.array([])
        }));

        break;
      }
      default: {
        console.error(`Question type ${type} not supported!`);
      }

    }
  }

  submitForm() {
    this.utilService.openConfirmationDialog()
      .then(() => {
        this.surveyService.createNewSurvey(this.form.value).subscribe(s => {
          this.utilService.openSimpleDialog('Survey created.');
          this.form.reset();
          this.form = this.buildForm();
        });
      })
      .catch(() => {
        console.log('Closed');
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
