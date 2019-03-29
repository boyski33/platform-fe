import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private confirmationDialog = ConfirmationDialogComponent;

  constructor(private modalService: NgbModal) {
  }

  public openConfirmationDialog(): Promise<any> {
    return this.modalService.open(this.confirmationDialog).result;
  }

}
