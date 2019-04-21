import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UtilService } from '../services/util.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.scss' ]
})
export class NavigationComponent implements OnInit {

  userIcon = faUser;

  constructor(private authService: AuthService,
              private utilService: UtilService) {
  }

  ngOnInit() {
  }

  logout() {
    if (this.authenticated) {
      this.utilService.openConfirmationDialog()
        .then(() => {
          this.authService.logout();
        })
        .catch(() => {
          console.log('Closed with NO');
        });
    }
  }

  login() {
    if (!this.authenticated) {
      this.authService.login();
    }
  }

  get authenticated() {
    return this.authService.isAuthenticated();
  }

  get email() {
    if (this.authenticated) {
      return this.authService.getUserEmail();
    }
  }

}
