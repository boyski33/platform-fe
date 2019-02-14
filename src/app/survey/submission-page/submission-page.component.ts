import { Component, Input, OnInit } from '@angular/core';
import { SurveyQuestion } from '../../model/survey-question';
import { Survey } from '../../model/survey';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'submission-page',
  templateUrl: './submission-page.component.html',
  styleUrls: ['./submission-page.component.scss']
})
export class SubmissionPageComponent implements OnInit {

  survey: Survey;

  constructor(private _route: ActivatedRoute,
              private _questionService: QuestionService) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this._questionService.getSurvey(id).subscribe(s => this.survey = s);
  }

}
