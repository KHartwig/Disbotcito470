import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FeaturedItem } from '../_models';
import { Item } from '../_models';


@Injectable()
export class FeaturedListService {
    constructor(private http: HttpClient) { }
    item:Item;
    // work around for now until we can figure how to get a global config obj
    apiUrl = 'http://localhost:4000';

    getAll() {
        return this.http.get<FeaturedItem[]>(`${this.apiUrl}/featured_items`);
    }

    getById(id: number) {
        return this.http.get(`${this.apiUrl}/featured_items/` + id);
    }

    create(item: FeaturedItem) {
        return this.http.post(`${this.apiUrl}/featured_items/create`, item);
    }

}
