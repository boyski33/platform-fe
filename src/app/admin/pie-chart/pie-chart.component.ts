import { Component, Input, OnInit } from '@angular/core';
import { AnswerChartData } from '../survey-stats/survey-stats.component';

@Component({
  selector: 'hippo-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: [ './pie-chart.component.scss' ]
})
export class PieChartComponent implements OnInit {

  @Input() data: AnswerChartData[];

  view = [600, 300];

  colorScheme = 'forest';
  showLegend = false;
  explodeSlices = false;
  showLabels = true;
  doughnut = false;
  gradient = false;

  constructor() {
  }

  ngOnInit() {
  }

}
