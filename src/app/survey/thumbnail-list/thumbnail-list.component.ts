import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../model/survey';

@Component({
  selector: 'thumbnail-list',
  templateUrl: './thumbnail-list.component.html',
  styleUrls: [ './thumbnail-list.component.scss' ]
})
export class ThumbnailListComponent implements OnInit {

  @Input() allSurveys: Survey[];

  constructor() {
  }

  ngOnInit() {
  }

}
