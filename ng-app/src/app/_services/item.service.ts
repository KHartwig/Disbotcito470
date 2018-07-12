import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Item } from '../_models';
import { FeaturedItem } from '../_models';
import { FeaturedListService } from '../_services';

@Injectable()
export class ItemService {
    item:Item;
    api_url = 'http://localhost:4000';
    itemUrl = `${this.api_url}/items`;

    constructor(private http: HttpClient,
                private featuredListService:FeaturedListService

                ) { }

    getAll() {
        return this.http.get<Item[]>(`${this.api_url}/items`);
    }

    create(item: Item, id: number) {
        // console.log(id);
        item['date'] = new Date();
        item['ownerId'] = id;
        item['status'] = "Not Done";
         // console.log(item);
        return this.http.post(`${this.api_url}/items/create`, item);
    }

    createF(fitem: FeaturedItem, id: number) {
        this.item = new Item();
        // console.log(id);
        this.item['date'] = new Date();
        this.item['itemname'] = fitem['name'];
        this.item['category'] = fitem['category'];
        this.item.quantity = 1;
        this.item['ownerId'] = id;
        this.item['status'] = "Not Done";
         // console.log(this.item);
        return this.http.post(`${this.api_url}/items/create`, this.item);
    }


    //Update item, takes a Item Object as parameter
    update(item: Item) {
        return this.http.put(`${this.api_url}/items/` + item.id, item);
    }



    deleteItem(id:string):any{
        //Delete the object by the id
        let deleteUrl = `${this.itemUrl}/${id}`
        return this.http.delete(deleteUrl)
        .pipe(map(res  => {
        return res;
        }))
    }
    delete(id: number) {
        return this.http.delete(`${this.api_url}/items/` + id);
    }
    
    //Default Error handling method.
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
