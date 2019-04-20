import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private spinner: NgxSpinnerService,
              private router: Router) {
    authService.handleAuthentication();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.spinner.show();
      } else if (event instanceof RouteConfigLoadEnd) {
        this.spinner.hide();
      }
    });
  }

}
