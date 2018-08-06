import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User, DiscordUser } from '../_models';

@Injectable()
export class DataService {

  defaultUser : User;
  defaultBotUser : any;

  private userSource = new BehaviorSubject<User>(null);
  currentUser = this.userSource.asObservable();

  private tempCreateBotInfo = new BehaviorSubject(null);
  currentCreateBotInfo = this.tempCreateBotInfo.asObservable();

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

  changeCreateBotInfo(token: string, botUser: DiscordUser) {
    this.tempCreateBotInfo.next({token: token, botUser: botUser});
  }


}
