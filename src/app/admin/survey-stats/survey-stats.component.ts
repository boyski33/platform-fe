import { Component, Input, OnInit } from '@angular/core';
import { QuestionStats } from '../../survey/model/question-stats';

export interface ChartData {
  name: string;
  value: number;
}

@Component({
  selector: 'survey-stats',
  templateUrl: './survey-stats.component.html',
  styleUrls: [ './survey-stats.component.scss' ]
})
export class SurveyStatsComponent implements OnInit {

  @Input() surveyStats: QuestionStats[];

  constructor() {
  }

  ngOnInit() {
  }

  // FIXME: this is slow - refactor!!!
  convertToChartData(answerCount: { [key: string]: number }): ChartData[] {
    const data = [];

    for (const [ k, v ] of Object.entries(answerCount)) {
      data.push({
        'name': k,
        'value': v
      });
    }

    console.log(data);
    return data;
  }

}
