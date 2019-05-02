import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Survey } from '../model/survey';
import { SurveyService } from '../services/survey.service';
import { UtilService } from '../../general/services/util.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: [ './creation-form.component.scss' ]
})
export class CreationFormComponent implements OnInit, OnDestroy {

  form = this.buildForm();
  survey: Survey;
  removeIcon = faTimes;
  submitIcon = faCheck;
  componentDestroyed$: Subject<boolean> = new Subject();

  constructor(private fb: FormBuilder,
              private surveyService: SurveyService,
              private utilService: UtilService,
              private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
  }

  addQuestion(type: string) {
    switch (type) {
      case 'textbox':
      case 'textarea':
      case 'date': {
        this.questions.push(this.fb.group({
          controlType: [ type ],
          label: [ '', Validators.required ]
        }));

        break;
      }
      case 'dropdown':
      case 'radio':
      case 'yesno':
      case 'range': {
        this.questions.push(this.fb.group({
          controlType: [ type ],
          label: [ '', Validators.required ],
          options: this.fb.array([], Validators.required)
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
        this.surveyService.createNewSurvey(this.form.value)
          .pipe(takeUntil(this.componentDestroyed$))
          .subscribe(() => {
            this.utilService.openSimpleDialog('Survey created.');
            this.form.reset();
            this.form = this.buildForm();
            this.router.navigate(['surveys', 'dashboard']);
          });
      })
      .catch(() => {
        console.log('Closed');
      });
  }

  remove(index) {
    this.questions.controls.splice(index, 1);

    if (this.questions.controls.length < 1) {
      this.form.get('questions').reset();
    }
  }

  private buildForm() {
    return this.fb.group({
      title: [ '', Validators.required ],
      description: [ '' ],
      questions: this.fb.array([], Validators.required)
    });
  }

  get title() {
    return this.form.get('title') as FormControl;
  }

  get questions() {
    return this.form.get('questions') as FormArray;
  }

}
