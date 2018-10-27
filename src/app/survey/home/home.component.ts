import { Component, OnInit } from '@angular/core';
import { Survey } from '../../model/survey';
import { TemporaryService } from '../services/temporary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  surveys: Survey[];

  constructor(private _tempService: TemporaryService) {
  }

  ngOnInit() {
    this._loadSurveys();
  }

  private _loadSurveys() {
    this._tempService.getAllSurveys()
      .subscribe(data => this.surveys = data);
  }

}
