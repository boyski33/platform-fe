import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Survey } from '../model/survey';

@Component({
  selector: 'thumbnail-list',
  templateUrl: './thumbnail-list.component.html',
  styleUrls: [ './thumbnail-list.component.scss' ]
})
export class ThumbnailListComponent implements OnInit {

  @Input() surveys: Survey[];
  @Input() buttonText: string;
  @Output() thumbnailClick = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  emitClick(id: string) {
    this.thumbnailClick.emit(id);
  }

}
