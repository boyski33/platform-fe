import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

const apiUrl = environment.coreSurveyServiceUrl;
const usersUrl = `${apiUrl}/users`;

function headers() {
  const token = localStorage.getItem('access_token');

  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) {
  }

  public getUserByEmail(email: string) {
    const url = `${usersUrl}/${email}`;

    return this.http.get<User>(url, headers());
  }

  public updateUser(user: User) {
    return this.http.put<User>(usersUrl, user, headers());
  }
}
