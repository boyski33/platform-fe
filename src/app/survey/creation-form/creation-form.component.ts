import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Survey } from '../model/survey';
import { SurveyService } from '../services/survey.service';
import { UtilService } from '../../general/services/util.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
              private utilService: UtilService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
  }

  addQuestion(type: string) {
    // todo DRY
    switch (type) {
      case 'textbox': {
        this.questions.push(this.fb.group({
          controlType: [ 'textbox' ],
          label: [ '' ]
        }));

        break;
      }
      case 'textarea': {
        this.questions.push(this.fb.group({
          controlType: [ 'textarea' ],
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
      case 'yesno': {
        this.questions.push(this.fb.group({
          controlType: [ 'yesno' ],
          label: [ '' ],
          options: this.fb.array([])
        }));

        break;
      }
      case 'range': {
        this.questions.push(this.fb.group({
          controlType: [ 'range' ],
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
        this.surveyService.createNewSurvey(this.form.value)
          .pipe(takeUntil(this.componentDestroyed$))
          .subscribe(() => {
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
