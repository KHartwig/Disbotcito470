import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Command } from '../_models';

@Injectable()
export class CommandService {
  constructor(private http: HttpClient) {  }

  apiUrl = 'http://localhost:4000/api';
  commandUrl = '';

  getAllByBot(botId: string) {
    return this.http.get<Command[]>(`${this.createBaseURL(botId)}/`);
  }

  getById(botId: string, cmdId: number) {
    return this.http.get<Command>(`${this.createBaseURL(botId)}/` + cmdId);
  }

  add(botId: string, cmd: Command) {
    return this.http.post<Command>(`${this.createBaseURL(botId)}/add`, cmd);
  }

  update(botId: string, cmdId: number, cmd: Command) {
    return this.http.put<Command>(`${this.createBaseURL(botId)}/` + cmdId, cmd);
  }

  updateAll(botId: string, cmds: Command[]) {
    console.log('Sending commands', cmds);
    return this.http.put<Command[]>(`${this.createBaseURL(botId)}/`, {commands: cmds});
  }

  delete(botId: string, cmdId: number) {
    return this.http.delete(`${this.createBaseURL(botId)}/` + cmdId);
  }

  private createBaseURL(botId: string) {
    return this.apiUrl + '/bots/' + botId + '/commands';
  }
}
