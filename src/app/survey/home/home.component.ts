import { Component, OnInit } from '@angular/core';
import { Survey } from '../model/survey';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  surveys: Survey[];

  constructor(private _questionService: QuestionService) {
  }

  ngOnInit() {
    this._loadSurveys();
  }

  private _loadSurveys() {
    this._questionService.getAllSurveys()
      .subscribe(data => this.surveys = data);
  }

}
