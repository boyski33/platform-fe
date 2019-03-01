import { Component, OnInit } from '@angular/core';
import { Survey } from '../model/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Question } from '../model/question';

@Component({
  selector: 'submission-page',
  templateUrl: './submission-page.component.html',
  styleUrls: ['./submission-page.component.scss']
})
export class SubmissionPageComponent implements OnInit {

  survey$: Observable<Survey>;
  questions$: Observable<Question[]>;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _questionService: QuestionService) {
  }

  ngOnInit() {
    this.survey$ = this._route.paramMap.pipe(
      switchMap(params => this._questionService.getSurvey(params.get('id')))
    );
  }

}
