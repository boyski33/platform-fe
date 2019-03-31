import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'single-button-dialog',
  templateUrl: './single-button-dialog.component.html',
  styleUrls: ['./single-button-dialog.component.scss']
})
export class SingleButtonDialogComponent implements OnInit {

  @Input() public text = 'Dialog';

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
