import { Component, Input, OnInit } from '@angular/core';
import { QuestionStats } from '../../survey/model/question-stats';
import { Question } from '../../survey/model/question';

export interface QuestionChartData {
  question: Question;
  data: AnswerChartData[];
}

export interface AnswerChartData {
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
  surveyChartData: QuestionChartData[];

  constructor() {
  }

  ngOnInit() {
    this.surveyChartData = this.convertToChartData();
  }

  convertToChartData(): QuestionChartData[] {
    const result = [];

    for (const stats of this.surveyStats) {
      result.push(this.convertQuestionStatsToChartData(stats));
    }

    return result;
  }

  private convertQuestionStatsToChartData(stats: QuestionStats): QuestionChartData {
    const data = [];

    for (const [ k, v ] of Object.entries(stats.answerCount)) {
      data.push({
        'name': k,
        'value': v
      });
    }

    return {
      'question': stats.question,
      'data': data
    };
  }
}
