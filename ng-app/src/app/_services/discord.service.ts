import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DiscordUser } from '../_models';

@Injectable()
export class DiscordService {
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:4000/api';
  discordUrl = this.apiUrl + '/discord';

  validate(token: string) {
    return this.http.get<DiscordUser>(`${this.discordUrl}/validate?discordToken=${token}`);
  }
}
