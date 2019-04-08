import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from '../survey-stats/survey-stats.component';

@Component({
  selector: 'hippo-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() data: ChartData[];

  newData: ChartData[];

  view = [520, 280];

  colorScheme = 'forest';
  showLegend = false;
  gradient = false;

  constructor() { }

  ngOnInit() {
    this.newData = this.data;
  }

}
