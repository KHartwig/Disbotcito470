import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Command } from '../_models';

@Injectable()
export class CommandService {
  constructor(private http: HttpClient) {  }

  apiUrl = 'http://localhost:4000/api';
  botUrl = this.apiUrl + '/bots';
  commandUrl = '';

  setBotId(botId: number) {
    this.commandUrl = this.botUrl + '/' + botId + '/commands';
    console.log("CommandURL: " + this.commandUrl);
  }

  getAll() {
    return this.http.get<Command[]>(`${this.commandUrl}`);
  }

  getById(id: number) {
    return this.http.get<Command>(`${this.commandUrl}/` + id);
  }

  add(cmd: Command) {
    return this.http.post(`${this.commandUrl}/add`, cmd);
  }

  update(cmd: Command, id: number) {
    return this.http.put(`${this.commandUrl}/` + id, cmd);
  }

  delete(id: number) {
    return this.http.delete(`${this.commandUrl}/` + id);
  }
}
