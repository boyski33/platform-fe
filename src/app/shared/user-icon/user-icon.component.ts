import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user/model/user';
import { Submission } from '../../survey/model/submission';
import { faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'hippo-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: [ './user-icon.component.scss' ]
})
export class UserIconComponent implements OnInit {

  @Input() user: User;
  icon: any;
  isPredicted: boolean;

  constructor() {
  }

  ngOnInit() {
    this.icon = this.getIcon();
  }

  getIcon() {
    if (this.user) {
      this.isPredicted = this.user.isPredicted;
      return this.isPredicted ? faUserSecret : faUser;
    }

    return null;
  }

}
