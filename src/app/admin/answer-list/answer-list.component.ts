import { Component, Input, OnInit } from '@angular/core';
import { AnswerChartData } from '../survey-stats/survey-stats.component';

@Component({
  selector: 'answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  @Input() data: AnswerChartData[];

  constructor() { }

  ngOnInit() {
  }

}
