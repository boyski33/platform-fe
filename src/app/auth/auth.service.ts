import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'iJe22hqFhTq8fcgSjOMa8s4vO37H51D3',
    domain: 'hippo-survey.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'http://localhost:8866',
    redirectUri: 'http://localhost:4200/home',
    scope: 'openid view:submissions'
  });

  constructor() {
  }

  public login() {
    this.auth0.authorize();
  }

  public handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      } else if (err) {
        console.error(err);
      }
    });
  }

  private setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    // Disable silent authentication by calling logout() explicitly
    this.auth0.logout({
      return_to: window.location.origin
    });
  }

  /**
   * Checks whether the current time is past the access token's expiry time
   */
  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
