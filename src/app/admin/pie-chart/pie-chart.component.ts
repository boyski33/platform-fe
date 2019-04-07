import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from '../survey-stats/survey-stats.component';

@Component({
  selector: 'hippo-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: [ './pie-chart.component.scss' ]
})
export class PieChartComponent implements OnInit {

  @Input() data: ChartData[];

  newData: ChartData[];

  colorScheme = 'flame';
  showLegend = false;
  explodeSlices = false;
  showLabels = true;
  doughnut = false;
  gradient = false;

  constructor() {
  }

  ngOnInit() {
    this.newData = this.data;
  }

}
