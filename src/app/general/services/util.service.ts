import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { SingleButtonDialogComponent } from '../single-button-dialog/single-button-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private confirmationDialog = ConfirmationDialogComponent;
  private simpleDialog = SingleButtonDialogComponent;

  constructor(private modalService: NgbModal) {
  }

  public openConfirmationDialog(): Promise<any> {
    return this.modalService.open(this.confirmationDialog, {windowClass: 'custom-modal'}).result;
  }

  public openSimpleDialog() {
    return this.modalService.open(this.simpleDialog, {windowClass: 'custom-modal'});
  }
}
