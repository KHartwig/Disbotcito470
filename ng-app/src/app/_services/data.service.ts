import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../_models';

@Injectable()
export class DataService {

  defaultUser : User;

  private userSource = new BehaviorSubject(this.defaultUser);
  currentUser = this.userSource.asObservable();

  constructor() {
      this.defaultUser = JSON.parse(localStorage.getItem('currentUser'));
      this.userSource.next(this.defaultUser);
  }

  changeCurrentUser(user: User) {
      this.userSource.next(user);
      if (user)
        localStorage.setItem('currentUser', JSON.stringify(user));
      else
        localStorage.removeItem('currentUser');
  }

}
