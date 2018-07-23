import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Action } from '../_models';

@Injectable()
export class ActionService {
  constructor(private http: HttpClient) {  }

  apiUrl = 'http://localhost:4000/api';
  actionUrl = '';

  setIds(botId: number, commandId: number) {
    this.actionUrl = this.apiUrl + '/bots/' + botId + '/commands/' + commandId + '/actions';
    //console.log("ActionURL: " + this.actionUrl);
  }

  getAll() {
    return this.http.get<Action[]>(`${this.actionUrl}`);
  }

  getById(id: number) {
    return this.http.get<Action>(`${this.actionUrl}/` + id);
  }

  add(action: Action) {
    return this.http.post(`${this.actionUrl}/add`, action);
  }

  update(action: Action, id: number) {
    return this.http.put(`${this.actionUrl}/` + id, action);
  }

  delete(id: number) {
    return this.http.delete(`${this.actionUrl}/` + id);
  }
}
