import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { DataService } from '../_services';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private data: DataService) { }

    // work around for now until we can figure how to get a global config obj
    apiUrl = 'http://localhost:4000';

    login(username: string, password: string) {
        return this.http.post<any>(`${this.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.data.changeCurrentUser(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        this.data.changeCurrentUser(null);
    }
}
