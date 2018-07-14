import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../_models';

@Injectable()
export class ContactService {
    constructor(private http: HttpClient) { }

    apiUrl = 'http://localhost:4000/api';
    contactUrl = this.apiUrl + '/contacts';

    getAll() {
        return this.http.get<Contact[]>(`${this.contactUrl}`);
    }

    getById(id: string) {
        return this.http.get<Contact>(`${this.contactUrl}/` + id);
    }

    add(contact: Contact) {
        return this.http.post(`${this.contactUrl}/add`, contact);
    }

    update(contact: Contact, id: string) {
        return this.http.put(`${this.contactUrl}/` + id, contact);
    }

    delete(id: string) {
        return this.http.delete(`${this.contactUrl}/` + id);
    }
}
