import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: UserApiService) {
  }

  public getUserByEmail(email: string) {

  }

  public addUser(user: User): Observable<User> {
    return this.api.updateUser(user);
  }
}
